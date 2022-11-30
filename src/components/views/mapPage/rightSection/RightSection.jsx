import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import useCoords from "../../../../hook/useCoords";
import { turnMap } from "../../../../redux/_actions/turn_action";
import InterestedMap from "./maps/InterestedMap";

function RightSection() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { latitude, longitude, isLoaded } = useCoords();
  const [latitude1, setlatitude1] = useState();
  const [longitude1, setlongitude1] = useState();
  useEffect(() => {
    setlatitude1(latitude);
    setlongitude1(longitude);
  }, [latitude]);

  return (
    <div>
      <InterestedMap latitude1={latitude1} longitude1={longitude1} />
    </div>
  );
}

export default RightSection;
