import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./views/LandingPage";
import MapPage from "./views/mapPage/MapPage";
import DefaultMap from "./views/mapPage/rightSection/maps/common/DefaultMap";
import RelationMap from "./views/mapPage/rightSection/maps/RelationMap";
import SampleMap from "./views/mapPage/rightSection/maps/SampleMap";

function App() {
  // const isAuth = useSelector((state) => state.user.isAuth);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route path="/mapPage" element={<MapPage />}>
            <Route path="/mapPage/defaultMap" element={<DefaultMap />} />
            <Route path="/mapPage/relationMap" element={<RelationMap />} />
            <Route path="/mapPage/testMap" element={<SampleMap />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
