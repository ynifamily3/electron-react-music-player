import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";
import axios from "axios";
import produce from "immer";

import "./TabsCommon.scss";
import "./Chart.scss";

const Chart = props => {
  const { activated } = props;
  const [top100, setTop100] = useState(false);
  const { deviceId } = useSelector(state => state.deviceId, []);

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
                <li key={x.trackId}>
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
