import React from "react";
import Layout from "../../components/layout";
import Chessboard from "chessboardjsx"

export default function Pantry() {
  return (
    <Layout
      menuItems={[
        { label: "about", to: "/about", class: "parent" },
        { label: "food", to: "/food", class: "parent" },
        { label: "tech", to: "/tech", class: "parent" }
      ]}
    >
      <h1>Knight Moves</h1>
      <br/>
      <Chessboard
        onSquareClick={(square) => {
          console.log(square, " clicked")
        }}
        onMouseOverSquare={(square) => console.log(square)}

      />
    </Layout>
  );
}