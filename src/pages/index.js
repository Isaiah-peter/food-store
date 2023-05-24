import * as React from "react";
import Recipes from "../components/Recipes";
import Intro from "../components/Intro";
import Header from "../components/Header";
import LatestRecipe from "../components/LatestRecipe";
import "../styles/global.css";

const IndexPage = () => {
  return (
    <div className="bg-[#fefefe] w-full overflow-x-hidden pb-8">
      <Header />
      <Intro />
      <Recipes />
      <div className="flex justify-center">
        <LatestRecipe />
      </div>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
