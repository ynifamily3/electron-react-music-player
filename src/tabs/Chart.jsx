import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";
import axios from "axios";
import produce from "immer";

import "./TabsCommon.scss";
import "./Chart.scss";

import { streamingUrlGenerate } from "../utility/index";

import { PlayPause, setAll, setSource } from "../store/modules/playingStatus";

const Chart = props => {
  const { activated } = props;
  const [top100, setTop100] = useState(false);
  const { deviceId } = useSelector(state => state.deviceId, []);
  const dispatch = useDispatch();

  const playMusic = (payload, e) => e => {
    console.log("곡정보 디스패칭");
    console.log(payload.trackTitle);

    // 소스를 바꿔서 곡을 재생시키면 될듯. 소스도 상태관리. 필요.
    const fetchm3u8 = async (deviceId, trackId) => {
      const x = await streamingUrlGenerate(deviceId, trackId);
      // alert("before dispatch new source");
      // dispatch(setSource(x));
      dispatch(
        setAll({
          playingstate: PlayPause.PLAYING,
          position: 0,
          duration: 60, // 1분 미리듣기..
          volume: 100,
          trackId: payload.trackId,
          trackTitle: payload.trackTitle,
          artists: payload.artists,
          imageUrl: payload.imageUrl,
          source: x
        })
      );
    };
    fetchm3u8(deviceId, payload.trackId);
  };

  useEffect(() => {
    if (!activated) return;
    // 여기서 서버와통신함.
    axios
      .get("https://apis.naver.com/vibeWeb/musicapiweb/vibe/v2/chart/home", {
        headers: {
          accept: "application/json"
        }
      })
      .then(resp => {
        const tracks_original =
          resp.data.response.result.charthome.charts[0].items.tracks;
        const top100_produce = tracks_original.map(x => {
          return {
            trackId: x.trackId,
            trackTitle: x.trackTitle,
            artists: x.artists[0].artistName,
            imageUrl: x.artists[0].imageUrl
          };
        });
        console.log(top100_produce);
        setTop100(top100_produce);
      });
  }, [activated]);

  return (
    <div className={clsx("tab", "tab-chart", activated && "activated")}>
      <div className="today-chart-100">
        <div className="title">오늘 Top 100</div>
        <div>{deviceId}</div>
        {!top100 ? (
          <div>로딩중입니다...</div>
        ) : (
          <ol>
            {top100.map((x, i) => {
              return (
                <li key={x.trackId} onClick={playMusic(x)}>
                  {" "}
                  {/* 원래는 재생목록에 push 해야 함 .*/}
                  <div style={{ padding: "30px" }}>
                    <img src={x.imageUrl} />
                    <div style={{ marginTop: "15px" }}>{x.trackTitle}</div>
                    <div>{x.artists}</div>
                  </div>
                </li>
              );
            })}
          </ol>
        )}
      </div>
    </div>
  );
};

export default Chart;
