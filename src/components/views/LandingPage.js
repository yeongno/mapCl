import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import MarkerCluster from "./map/MarkerCluster";
import Nomal from "./map/nomal";

function LandingPage() {
  return (
    <div>
      <Nomal />
      {/* <MarkerCluster /> */}
      <Outlet />
    </div>
  );
}

export default LandingPage;
