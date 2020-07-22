import React from "react";
import { GridLoader } from "react-spinners";

const loaderContainer = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  flexDirection: "column",
};
export default function Loading() {
  return (
    <div style={loaderContainer} className="">
      <GridLoader color="#2c7eb4" />
      <h2>Loading</h2>
    </div>
  );
}
