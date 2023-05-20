import moment from "moment";
import { ProfileOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import "moment/locale/ko";
import React, { useEffect, useState } from "react";
import Btn__Like from "../Btn__Like";
import Btn_comment from "../Btn_comment";
import { usePost } from "../../../../../hook/useMyInfo";
import "../../../../styles/community/common/renderList/GeneralList.scss";
import GeneralFooter from "../GeneralFooter";
import { getPost } from "../../../../../redux/_actions/post_action";
import { useDispatch } from "react-redux";

function GenerList() {
  const dispatch = useDispatch();
  
  const Post = usePost();
  const postFrom = "a";
  const [PostImg, setPostImg] = useState(1);
  const [PostTitle, setPostTitle] = useState(1);
  const [PostContent, setPostContent] = useState(1);
  const [PostFavoriteNumber, setPostFavoriteNumber] = useState(1);
  const [PostCreatedAt, setPostCreatedAt] = useState(1);
  const [userFrom, setUserFrom] = useState(1);
  // users
  const [Name, setName] = useState("1");
  const [FilePath, setFilePath] = useState("1");

  //DropDown_ compared userId
  const [Compare, steCompare] = useState(false);

  const [LastIndex, setLastIndex] = useState(0);
  const [ThisPaging, setThisPaging] = useState(1);
  const [ThisTopic, setThisTopic] = useState("public");
  useEffect(() => {
    setLastIndex(Post?.length);
    dispatch(getPost());

  }, [Post]);

  const renderList = Post?.map((posts, index) => {
    if (ThisPaging * 10 < index + 1 || index < ThisPaging * 10 - 10) {
      return;
    }
    return (
      <div className="generalPosts_container" key={index}>
        <div className="topLabel_container">
          {FilePath && (
            <img
              onClick={() => {}}
              // src={`http://localhost:5000/${FilePath}`}
            />
          )}
          {!FilePath && (
            <ProfileOutlined
              style={{
                width: "35px",
                height: "35px",
                border: "1px solid lightgray",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50px",
                boxShadow: "1px 1px 1px 1px inset",
                marginTop: "5px",
                marginLeft: "5px",
                marginRight: "10px",
              }}
            />
          )}
          <div className="postInfo_section">
            <span>{posts.userName}</span>
            <span>{moment(posts.createAt).fromNow()}</span>
          </div>
          <div
            style={{
              border: "none",
              alignContent: "end",
              display: "flex",
              width: "100%",
              justifyContent: "end",
              marginTop: "5px",
            }}
          >
            {Compare && (
              <Dropdown
                postFrom={postFrom}
                title={PostTitle}
                content={PostContent}
                userFrom={userFrom}
              />
            )}
          </div>
        </div>
        <div className="title_wrapper">
          <span>{posts.title}</span>
        </div>
        <div className="image_wrapper">
          {/* {PostImg && (
                      <img
                        style={{
                          maxWidth: "50%",
                          maxHeight: "50%",
                        }}
                        // src={`http://localhost:5000/${PostImg}`}
                        alt="FileImg"
                      />
                    )} */}
        </div>
        <div className="detail_wrapper">
          <span>{posts.content}</span>{" "}
        </div>
        <div className="full__partition" />
        <div
          className="smile_section"
          //   style={{
          //     marginLeft: "2%",
          //     marginBottom: "1%",
          //     marginTop: "1%",
          //   }}
        >
          <SmileOutlined />
          <span>{posts.FavoriteNumber}</span>
        </div>
        <div className="bottom_partition" />
        <div className="bottom_section">
          <div className="like_section">
            {/* <LikeButton
                style={{ border: "none" }}
                postFrom={postFrom}
                title={PostTitle}
                content={PostContent}

                favoriteNumber={PostFavoriteNumber}
              /> */}
            <Btn__Like />
          </div>
          <div className="commend_section">
            <Btn_comment />
            {/* <ReplyButton postFrom={postFrom} /> */}
          </div>
        </div>{" "}
      </div>
    );
  });

  return (
    <div>
      {renderList}
      {LastIndex > 1 && (
        <GeneralFooter
          LastIndex={LastIndex}
          setThisPaging={setThisPaging}
          ThisTopic={ThisTopic}
        />
      )}
    </div>
  );
}

export default GenerList;
