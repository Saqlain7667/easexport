import Sidebar from "../../components/Sidebar/Sidebar";
import Main from "../../components/Main/Main";
import "./Home.css";
import Searchbar from "../../components/Searchbar/Searchbar";
import { useState } from "react";

function Home() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [showSideBar, setShowSideBar] = useState(
    window.innerHeight > 680 ? true : false
  );
  const [showNavBar, setShowNavBar] = useState(
    window.innerHeight > 680 ? true : false
  );

  window.addEventListener("resize", () => {
    setWindowSize(window.innerWidth);
    console.log(`Window Size: ${windowSize}`);
  });

  return (
    <div className="home-wrapper">
      <i
        className="fa-solid fa-caret-down"
        onClick={() => setShowSideBar(showSideBar ? false : true)}
      ></i>
      <div className="home-container">
        {windowSize > 680 ? (
          <div className="home-sidebar">
            <Sidebar />
          </div>
        ) : windowSize < 681 && showSideBar === true ? (
          <Sidebar />
        ) : null}
        <div className="home-main">
          <Searchbar />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default Home;
