import React from "react";
import NewsList from "../components/Newslist";

const Home = () => {
  return (
    <div>
      <NewsList category={"world"} />
    </div>
  );
};

export default Home;
