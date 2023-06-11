import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ViewProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/product/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {product && (
        <div>
          <h1>{product.name}</h1>
          {/* Render other product information */}
        </div>
      )}
    </div>
  );
};

export default ViewProduct;
