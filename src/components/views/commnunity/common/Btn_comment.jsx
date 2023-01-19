import { MessageOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import React, { useState } from "react";
import ReplySection from "./modalComment/ReplySection";
// import ReplySection from "./ReplySection";

function Btn_comment(props) {
  const [replyOpen, setreplyOpen] = useState(false);
  const onReply = () => {
    setreplyOpen(true);
  };
  return (
    <div>
      <Button onClick={onReply}>
        <MessageOutlined />
        댓글 달기
      </Button>
      <Modal
        title="댓글창"
        centered
        open={replyOpen}
        onCancel={() => setreplyOpen(false)}
        footer=""
        width="80%"
      >
        {/* <ReplySection postFrom={props.postFrom} /> */}
        <ReplySection />
      </Modal>
    </div>
  );
}

export default Btn_comment;
