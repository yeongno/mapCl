import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Marker from "./map/Marker";
import Marker2 from "./map/Marker2";
import MarkerCluster from "./map/MarkerCluster";
import Nomal from "./map/nomal";

function LandingPage() {
  return (
    <div>
      {/* <Marker /> */}
      <Marker2 />
      {/* <Nomal /> */}
      {/* <MarkerCluster /> */}
      {/* <Outlet /> */}
    </div>
  );
}

export default LandingPage;
