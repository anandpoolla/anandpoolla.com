import React from "react";
import Layout from "../../components/layout";

export default function Pantry() {
  return (
    <Layout
      menuItems={[
        { label: "about", to: "/about", class: "parent" },
        { label: "food", to: "/food", class: "parent" },
        { label: "tech", to: "/tech", class: "parent" }
      ]}
    >
      <h1>Pantry</h1>
      These are the basics you will need
    </Layout>
  );
}