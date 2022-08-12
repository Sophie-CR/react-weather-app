import React from "react";
import ReactLoading from "react-loading";

const Loading = ({ bubbles, white }) => (
  <ReactLoading type={bubbles} color={white} height={"20%"} width={"20%"} />
);

export default Loading;
