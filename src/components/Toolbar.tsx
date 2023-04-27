import React from "react";
import Select from "@atlaskit/select";
const Toolbar = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "auto",
        width: "100%",
      }}
    >
      <Select
        inputId="single-select-example"
        className="single-select"
        classNamePrefix="react-select"
        options={[
          { label: "C", value: "c" },
          { label: "C++", value: "cpp" },
          { label: "Java", value: "java" },
        ]}
        spacing="compact"
      />
    </div>
  );
};

export default Toolbar;
