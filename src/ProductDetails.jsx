import { Button, CircularProgress } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const ProductDetails = () => {
  const { isPending, isError, error, mutate } = useMutation({
    mutationKey: ["get-single-product-details"],
    mutationFn: async () => {
      return await axios.get("https://fakestoreapi.com/products/10");
    },
  });
  if (isPending) {
    return <CircularProgress />;
  }
  return (
    <div>
      <h3>Product details page</h3>
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          mutate();
        }}
      >
        Fetch details
      </Button>
    </div>
  );
};

export default ProductDetails;
