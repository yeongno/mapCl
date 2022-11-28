import React from "react";
import Notice from "./notice/Notice";
import HotPlace from "./rankBaord/HotPlace";
import HotPost from "./rankBaord/HotPost";
import HotTopic from "./rankBaord/HotTopic";

function MainPage() {
  return (
    <div>
      <Notice />
      <HotPlace />
      <HotPost />
      <HotTopic />
    </div>
  );
}

export default MainPage;
