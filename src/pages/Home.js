import React from "react";
import Navbar from "../components/navbar";
import Main from "../components/main";

const Home = () => {
  return (
    <main>
      <div className="home">
        <Navbar />
        <Main />
      </div>
    </main>
  );
};

export default Home;
