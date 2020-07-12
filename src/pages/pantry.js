import React from "react";
import Layout from "../components/layout";

export default function Pantry() {
  return (
    <Layout menuItems={["food"]}>
      <h1>Pantry</h1>
      These are the basics you will need
    </Layout>
  );
}