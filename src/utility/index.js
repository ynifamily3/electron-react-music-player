import React, { useCallback } from "react";
import axios from "axios";
const preventCallback = e => {
  console.log("prevent callback invoked");
  // to do
  e.preventDefault();
};

const streamingUrlGenerate = async (deviceId, trackId) => {
  let m3u8Result;
  const response = await axios.get(
    "https://apis.naver.com/nmwebplayer/music/stplay_trackStPlay_NO_HMAC?play.trackId=" +
      trackId +
      "&deviceType=VIBE_WEB&deviceId=" +
      deviceId +
      "&play.mediaSourceType=AAC_320_ENC&play.aacSupported=Y"
  );
  console.log("streaming ");
  console.log(response);

  if (response) {
    m3u8Result = response.data.moduleInfo.hlsManifestUrl;
  }

  return m3u8Result;

  if (m3u8Result) {
    const response = await axios.get(m3u8Result);
    console.log("result -- ");
    console.log(response.data);
  }
};
export { preventCallback, streamingUrlGenerate };
