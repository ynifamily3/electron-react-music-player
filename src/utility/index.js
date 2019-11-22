import React, { useCallback } from "react";
import axios from "axios";
const preventCallback = e => {
  console.log("prevent callback invoked");
  // to do
  e.preventDefault();
};

const streamingUrlGenerate = async (deviceId, trackId) => {
  if (!deviceId) return;
  let m3u8Result;
  const response = await axios.get(
    "https://apis.naver.com/nmwebplayer/music/stplay_trackStPlay_NO_HMAC?play.trackId=" +
      trackId +
      "&deviceType=VIBE_WEB&deviceId=" +
      deviceId +
      "&play.mediaSourceType=AAC_096_ENC&play.aacSupported=Y"
  );
  m3u8Result = response.data.moduleInfo.hlsManifestUrl;
  return m3u8Result;
};

export { preventCallback, streamingUrlGenerate };
