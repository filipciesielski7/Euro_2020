import React from "react";
import Navbar from "../components/navbar";
import Main from "../components/main";

const Home = () => {
  return (
    <main>
      <div className="home">
        <Navbar />
        <Main />
        <p className="home__credits">
          &copy; {new Date().getFullYear()} Filip Ciesielski
        </p>
      </div>
    </main>
  );
};

export default Home;
