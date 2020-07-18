import React from "react";
import Layout from "../components/layout";

export default function Food() {
    return (
        <Layout
          menuItems={[
            { label: "about", to: "/about", class: "parent" },
            { label: "tech", to: "/tech", class: "parent" },
            { label: "pantry", to: "/food/pantry", class: "child" }
          ]}
        >
            <h1>Recipes</h1>
            Coming soon..
        </Layout>
    );
}