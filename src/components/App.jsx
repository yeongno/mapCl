import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./views/LandingPage";
import MainPage from "./views/mainPage/MainPage";
import DefaultMap from "./views/mainPage/rightSection/maps/common/DefaultMap";
import RelationMap from "./views/mainPage/rightSection/maps/RelationMap";
import SampleMap from "./views/mainPage/rightSection/maps/SampleMap";

function App() {
  // const isAuth = useSelector((state) => state.user.isAuth);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route path="/mainPage" element={<MainPage />}>
            <Route path="/mainPage/defaultMap" element={<DefaultMap />} />
            <Route path="/mainPage/relationMap" element={<RelationMap />} />
            <Route path="/mainPage/testMap" element={<SampleMap />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
