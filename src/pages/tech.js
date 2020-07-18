import React from "react";
import Layout from "../components/layout";

export default function Tech() {
    return (
        <Layout
          menuItems={[
            { label: "about", to: "/about", class: "parent" },
            { label: "food", to: "/food", class: "parent" },
            { label: "projects", to: "/tech/projects", class: "child" }
          ]}
        >
            <h1>Nerd stuff</h1>
            Coming soon..
        </Layout>
    );
}