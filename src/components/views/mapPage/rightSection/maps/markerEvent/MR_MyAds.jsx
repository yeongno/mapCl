import { useState } from "react";
import { MapMarker } from "react-kakao-maps-sdk";
import { useDispatch } from "react-redux";
import { turnInfoWindow } from "../../../../../../redux/_actions/turn_action";
import InterestedInfo from "../common/InterestedInfo/InterestedInfo";

//마커의 이벤트 처리하기 위한 함수
const MR_MyAds = ({ position, content, index }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(null);
  const [isClose, setIsClose] = useState(null);
  const offWindow = (index) => {
    setIsClose(index);
    dispatch(turnInfoWindow(false));
  };
  const onWindow = (index) => {
    setIsClose(null);
    setIsOpen(index);
    dispatch(turnInfoWindow(true));
  };

  return (
    <div>
      <MapMarker // 인포윈도우를 생성하고 지도에 표시합니다
        position={position}
        image={{
          src: "https://cdn-icons-png.flaticon.com/512/6317/6317510.png", // 마커이미지의 주소입니다
          size: {
            width: 24,
            height: 35,
          }, // 마커이미지의 크기입니다
        }}
        zIndex="-1"
        clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
        // onClick={() => setIsOpen(true)}
        onClick={() => {
          onWindow(index);
        }}
      >
        {/* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */}
        {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
        {isOpen === index && index !== isClose && (
          <div style={{ minWidth: "150px" }}>
            <img
              alt="close"
              width="14"
              height="13"
              src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
              style={{
                position: "absolute",
                right: "5px",
                top: "5px",
                cursor: "pointer",
              }}
              onClick={() => {
                offWindow(index);
              }}
            />
            <InterestedInfo />
          </div>
        )}
      </MapMarker>
    </div>
  );
};

export default MR_MyAds;
