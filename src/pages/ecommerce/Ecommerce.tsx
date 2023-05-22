import React, { useEffect, useState } from "react";
import { Card, Carousel } from "antd";
import { useQuery } from "react-query";
import { Grid } from "./style";

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Ecommerce = () => {
  const { data, isLoading, error } = useQuery("products", () => {
    return fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => data);
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>

      <Grid>
        {/* {data.map((item: any) => {
          return (
            <Card key={item.id}>
              <h1>{item.name}</h1>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </Card>
          );
        })} */}
      </Grid>
    </div>
  );
};

export default Ecommerce;
