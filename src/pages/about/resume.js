import React from "react";
import Layout from "../../components/layout"

export default function Resume() {
  return(
    <Layout
      menuItems={[
        { label: "about", to: "/about", class: "parent" },
        { label: "food", to: "/food", class: "parent" },
        { label: "tech", to: "/tech", class: "parent" }
      ]}
    >
      <h1>Resume</h1>
      Coming soon...
    </Layout>
  );
}