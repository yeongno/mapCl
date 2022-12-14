import { ProfileOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import React, { useState } from "react";
import Btn_comment from "../../../../commnunity/common/Btn_comment";
import Btn__Like from "../../../../commnunity/common/Btn__Like";

function GroupList() {
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
  const Test = ["z", "b", "c"];
  return (
    <div>
      <div>
        {Test.map((mapList, index) => (
          <div key={index}>
            <div>
              <div
                style={{
                  background: "white",
                  width: "100%",
                  height: "100%",
                  marginRight: "10%",
                  borderRadius: "2.5px",
                  boxShadow: "0px 0px 0px 1px #E2E2E2",
                  marginBottom: "10px",
                }}
              >
                <div>
                  <div style={{ display: "flex", marginBottom: "10px" }}>
                    {FilePath && (
                      <img
                        style={{
                          width: "4rem",
                          height: "2rem",
                          border: "1px solid lightgray",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "50px",
                          boxShadow: "1px 1px 1px 1px inset",
                          marginTop: "5px",
                          marginLeft: "5px",
                          marginRight: "10px",
                        }}
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
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                      }}
                    >
                      <span
                        style={{
                          height: "15px",
                          fontSize: "15px",
                          paddingLeft: "1px",
                          border: "none",
                          fontWeight: "bold",
                          marginTop: "4px",
                        }}
                      >
                        {Name}
                      </span>
                      <span
                        style={{
                          height: "10px",
                          fontSize: "10px",
                          paddingLeft: "1px",
                          marginTop: "2px",
                          border: "none",
                        }}
                      >
                        {/* {moment(PostCreatedAt).format("M[월] D[일]")} */}
                      </span>
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
                  <div style={{ display: "flex" }}>
                    <span
                      style={{
                        border: "none",
                        fontSize: "17px",
                        background: "none",
                        marginLeft: "1%",
                      }}
                    >
                      {PostTitle}
                    </span>
                  </div>
                  <div
                    style={{
                      justifyContent: "center",
                      marginLeft: "7%",
                    }}
                  >
                    {PostImg && (
                      <img
                        style={{
                          maxWidth: "50%",
                          maxHeight: "50%",
                        }}
                        // src={`http://localhost:5000/${PostImg}`}
                        alt="FileImg"
                      />
                    )}
                  </div>
                  <span
                    style={{
                      marginLeft: "10px",
                      border: "none",
                      fontSize: "12px",
                      background: "none",
                      marginLeft: "1%",
                    }}
                  >
                    {PostContent}
                  </span>
                  <div
                    style={{
                      width: "100%",
                      height: "0.3px",
                      background: "#cccccc",
                    }}
                  />
                  <div style={{ justifyContent: "center", display: "flex" }}>
                    <div style={{ width: "50%", border: "none" }}>
                      {/* <LikeButton
                style={{ border: "none" }}
                postFrom={postFrom}
                title={PostTitle}
                content={PostContent}

                favoriteNumber={PostFavoriteNumber}
              /> */}
                      <Btn__Like />
                    </div>
                    <div style={{ width: "50%", border: "none" }}>
                      <div
                        style={{
                          marginLeft: "2%",
                          marginBottom: "1%",
                          marginTop: "1%",
                        }}
                      >
                        <SmileOutlined
                          style={{ border: "none", opacity: "0" }}
                        />
                      </div>
                      <div style={{ marginRight: "2%" }}>
                        <div
                          style={{
                            background: "#cccccc",
                            height: "1px",
                            width: "100%",
                          }}
                        />
                      </div>
                      <Btn_comment />
                      {/* <ReplyButton postFrom={postFrom} /> */}
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroupList;
