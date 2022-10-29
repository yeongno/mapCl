import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Marker from "./map/Marker";
import MarkerCluster from "./map/MarkerCluster";
import Nomal from "./map/nomal";

function LandingPage() {
  return (
    <div>
      <Marker />
      {/* <Nomal /> */}
      {/* <MarkerCluster /> */}
      {/* <Outlet /> */}
    </div>
  );
}

export default LandingPage;
