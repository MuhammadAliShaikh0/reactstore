import React from "react";
import { useNavigate } from "react-router-dom";
import { productData } from "../../data";
import Cards from "../../Components/Card/Cards";

const Home = () => {
  return (
    <div>
      <h1 style={{marginTop:"3000px"}}>Home Page</h1>
      {productData.slice(0, 20).map((e, i) => {
        return (
          <div style={{ display: "inline-block" }} key={i}>
            <Cards
              id={e.id}
              title={e.title}
              desc={e.description}
              image={e.image}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
