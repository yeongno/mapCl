import React from "react";
import useTmpCenter from "../../../../hook/common/useTmpCenter";

function Test1() {
  const temp = useTmpCenter();
  console.log(temp, "temp");
  return <div>Test1</div>;
}

export default Test1;
