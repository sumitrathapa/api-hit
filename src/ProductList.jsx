import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CircularProgress, Button } from "@mui/material";

const ProductList = () => {
  const { isPending, isError, error, data } = useQuery({
    queryKey: ["get-product-list"],
    queryFn: async () => {
      return await axios.get("https://fakestoreapi.com/products");
    },
  });

  const productList = data?.data;

  if (isPending) {
    return <CircularProgress />;
  }

  return (
    <div>
      <h1>Product list</h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {productList.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                width: "400px",
                padding: "1rem",
                maxHeight: "400px",
              }}
            >
              <img src={item.image} alt="" width="200px" height="200px" />

              <h4>{item.title}</h4>

              <Button variant="contained" color="secondary" fullWidth>
                Explore
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
