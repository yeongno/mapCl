import { LikeFilled, LikeOutlined, SmileOutlined } from "@ant-design/icons";
import { Button } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
function Btn__Like(props) {
  const [Favorited, setFavorited] = useState("false");
  const [FavoriteNumber, setFavoriteNumber] = useState("2");
  useEffect(() => {
    // fetchPostList();
  }, []);

  //   const fetchPostList = () => {
  //     axios
  //       .post("/api/favoriteList/favorited", {
  //         userFrom: localStorage.getItem("userId"),
  //         postFrom: props.postFrom,
  //       })
  //       .then((response) => {
  //         setFavorited(response.data.favorited);
  //       });
  //     axios
  //       .post("/api/posts/getOnePost", {
  //         _id: props.postFrom,
  //       })
  //       .then((response) => {
  //         setFavoriteNumber(response.data.posts[0].favoriteNumber);
  //       });
  //   };

  const onLiked = () => {
    // axios
    //   .post("/api/favoriteList/removeFavorite", {
    //     postFrom: props.postFrom,
    //     userFrom: localStorage.getItem("userId"),
    //   })
    //   .then((response) => {
    //     if (response.data.success) {
    //       setFavorited(false);
    //     }
    //   });
    // axios.post("/api/posts/updateFavorite", {
    //   userFrom: localStorage.getItem("userId"),
    //   _id: props.postFrom,
    //   favoriteNumber: FavoriteNumber - 1,
    // });
    // setFavoriteNumber(FavoriteNumber - 1);
  };
  const onLike = () => {
    // axios
    //   .post("/api/favoriteList/addToFavorite", {
    //     userFrom: localStorage.getItem("userId"),
    //     postFrom: props.postFrom,
    //     title: props.title,
    //     content: props.content,
    //   })
    //   .then((response) => {
    //     setFavorited(true);
    //   });
    // axios
    //   .post("/api/posts/updateFavorite", {
    //     userFrom: localStorage.getItem("userId"),
    //     _id: props.postFrom,
    //     favoriteNumber: FavoriteNumber + 1,
    //   })
    //   .then((response) => {
    //     setFavoriteNumber(FavoriteNumber + 1);
    //   });
  };
  return (
    <div className="like__container">
      {Favorited && (
        <Button onClick={onLiked}>
          <LikeFilled />
          좋아요
        </Button>
      )}
      <div>
        {!Favorited && (
          <Button style={{ width: "100%", border: "none" }} onClick={onLike}>
            <LikeOutlined />
            좋아요
          </Button>
        )}
      </div>
    </div>
  );
}

export default Btn__Like;
