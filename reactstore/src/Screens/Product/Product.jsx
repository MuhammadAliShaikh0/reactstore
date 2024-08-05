import React from "react";
import { useParams } from "react-router-dom";
import { productData } from "../../data";

const Product = () => {
  const { id } = useParams();

  const filterData = productData.filter((e) => e.id === parseInt(id));

  return (
    <div>
      {/* <h1 style={{marginTop:"600px"}}>Product Page</h1> */}
      {filterData.map((e, i) => (
        <div key={i}>
          <img style={{width:"400px",height:"400px"}} src={e.image} alt={e.title} />
          <h1>{e.title}</h1>
          <h3>{e.description}</h3>
        </div>
      ))}
    </div>
  );
};

export default Product;
