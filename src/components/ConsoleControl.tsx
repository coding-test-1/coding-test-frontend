import React from "react";

import StarFilledIcon from "@atlaskit/icon/glyph/star-filled";
import ChevronUpIcon from "@atlaskit/icon/glyph/chevron-up";
import VidPlayIcon from "@atlaskit/icon/glyph/vid-play";
import Button from "@atlaskit/button";

function ConsoleControl() {
  return (
    <div
      style={{
        display: "flex",
        height: "auto",
        width: "100%",
        gap: "20px",
      }}
    >
      <div
        style={{
          columnGap: "1rem",
          flexWrap: "nowrap",
          alignItems: "center",
          flex: "1 1 0%",
        }}
      >
        <Button iconAfter={<ChevronUpIcon label="" size="medium" />}>
          Console
        </Button>
      </div>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          columnGap: "1rem",
          marginLeft: "auto",
          position: "relative",
        }}
      >
        <Button iconAfter={<VidPlayIcon label="" size="small" />}>Run</Button>
        <Button appearance="primary">Submit</Button>
      </div>
    </div>
  );
}

export default ConsoleControl;
