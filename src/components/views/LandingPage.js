import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Marker from "./map/Marker";
import Marker2 from "./map/Marker2";
import Marker3 from "./map/Marker3";
import Marker4 from "./map/Marker4";
import Marker5 from "./map/Marker5";
import MarkerCluster from "./map/MarkerCluster";
import Nomal from "./map/nomal";
import Map1 from "./reactMap/Map1";
import Map2 from "./reactMap/Map2";

function LandingPage() {
  return (
    <div>
      {/* <Marker /> */}
      {/* <Marker2 /> */}
      {/* <Marker3 /> */}
      {/* <Marker4 /> */}
      {/* <Marker5 /> */}
      {/* <Nomal /> */}
      {/* <MarkerCluster /> */}
      {/* <Map1 /> */}
      <Map2 />
      {/* <Outlet /> */}

    </div>
  );
}

export default LandingPage;
