import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { turnInfoWindow } from "../../../../../../../redux/_actions/turn_action";
import "../../../../../../styles/mapPage/actWindow/AdPost.scss";
import { Avatar, List, Space } from "antd";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
function AdPost() {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.turn.turnInfoWindow.content);
  const IconText = ({ icon, text }: { icon: React.FC, text: string }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  return (
    <div className="adPost-container">
      <img
        className="actWindow__btn--close"
        alt="close"
        width="14"
        height="13"
        src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
        onClick={() => {
          dispatch(turnInfoWindow({ act: false, kind: "", content: "" }));
        }}
      />
      <div className="adPost-wrapper">
        <div className="adPost-topSection">
          <div className="adPost-topLeft">
            <div className="date-section">
              <span>Created At</span>
              <span>04 june 2018</span>
            </div>
            <div className="title-section">
              {/* <span>{content.title}</span> */}
              <span>{content.title}</span>
            </div>
            <div className="profile-section">
              <div className="left-section">
                <div className="profileImg-section">
                  <img
                    src="https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927"
                    alt=""
                  />
                </div>
              </div>
              <div className="right-section">
                <div className="nickName-section">
                  <span>Jennifer Teacher</span>
                </div>
                <div className="subInfo-section">
                  <span>Founder and CEO, Financial Health Network</span>
                </div>
              </div>
            </div>
          </div>
          <div className="adPost-topRight">
            <div className="image-section">
              <img
                src="https://image.kmib.co.kr/online_image/2017/1128/611311110011938257_1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="adPost-bottomSection">
          <div className="content-section">
            <span>{content.content}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdPost;
