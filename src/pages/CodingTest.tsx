import React from "react";
import Split from "react-split";
import CodeEditor from "../components/CodeEditor";
import Toolbar from "../components/Toolbar";
import TabsDefaultExample from "../components/CodeResult";
import ConsoleControl from "../components/ConsoleControl";
import { token } from "@atlaskit/tokens";
import QuestionList from "../components/QuestionList";

// import { Toolbar } from '@mui/material';
function CodingTest() {
  {
    fetch("/questions/json")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }

  return (
    <Split className="splith" gutterSize={6}>
      <div style={{ display: "flex", flexGrow: 1, overflowY: "auto" }}>
        <QuestionList />
      </div>

      <Split
        className="split"
        direction="vertical"
        minSize={[400, 50]}
        gutterSize={6}
        snapOffset={30}
      >
        <div
          style={{
            flexDirection: "column",
            height: "100%",
            display: "flex",
            width: "100%",
          }}
        >
          <div style={{ flexShrink: 0 }}>
            <div style={{ display: "flex", position: "relative" }}>
              <div style={{ display: "flex", width: "100%", margin: "9px" }}>
                <Toolbar />
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexGrow: 1, overflowY: "auto" }}>
            <CodeEditor />
          </div>
        </div>
        <div>
          <div
            style={{
              flexDirection: "column",
              height: "100%",
              display: "flex",
            }}
          >
            <div
              style={{
                flexDirection: "column",
                height: "100%",
                display: "flex",
                width: "100%",
              }}
            >
              <div style={{ display: "flex", flexGrow: 1, overflowY: "auto" }}>
                <TabsDefaultExample />
              </div>
              <div style={{ flexShrink: 0 }}>
                <div style={{ display: "flex", position: "relative" }}>
                  <div
                    style={{ display: "flex", width: "100%", margin: "9px" }}
                  >
                    <ConsoleControl />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Split>
    </Split>
  );
}

export default CodingTest;
