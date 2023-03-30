import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const useMarkFilterSelector = () => {
  const [favorite, setFavorite] = useState(true);
  const [post, setPost] = useState(false);
  const [ad, setAd] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const filter = useSelector((state) => state?.turn?.turnMrFilter);
  useEffect(() => {}, []);
  useEffect(() => {
    executeFilter(filter);
  }, [filter]);
  const FilterValue = {
    //선호 위치 마크
    FAVORITEMR_FILTER() {
      setFavorite(true);
      setPost(false);
      setAd(false);
    },
    //게시글 마크
    POSTMR_FILTER() {
      setFavorite(false);
      setPost(true);
      setAd(false);
    },
    //모집글 마크
    ADMR_FILTER() {
      setFavorite(false);
      setPost(false);
      setAd(true);
    },
  };

  //해당 맵 스위치 코드
  const executeFilter = (FilterType) => {
    //not a function 오류가 뜸으로 if 걸어둠
    if (filter) FilterValue[FilterType]();
  };

  return { favorite, post, ad };
};
export default useMarkFilterSelector;
