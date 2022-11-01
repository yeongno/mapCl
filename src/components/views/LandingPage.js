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
import Map3 from "./reactMap/Map3";
import Map4 from "./reactMap/Map4";
import Map5 from "./reactMap/Map5";
import Map6 from "./reactMap/Map6";
import Sample from "./reactMap/Sample";

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
      {/* <Map2 /> */}
      {/* <Map3 /> */}
      {/* <Map4 /> */}
      {/* <Map5 /> */}
      <Map6 />
      {/* <Sample /> */}

      {/* <Outlet /> */}

    </div>
  );
}

export default LandingPage;
