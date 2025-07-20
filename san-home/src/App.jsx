import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./page/Home";
import Information from "./page/Information";
import MyProject from "./page/MyProject";
const Layout = () => {
  return (
    <div className="w-sreen">
      {/* <Header /> */}
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/infor" element={<Information />}></Route>
        <Route path="/projects" element={<MyProject />}></Route>
      </Route>
    </Route>
  )
);
function App() {
  return (
      <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
