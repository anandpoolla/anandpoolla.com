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
      <div>
        You need to stock these items in your pantry for the recipes I'm going to post. I highly recommend searching
        for the nearest Indian store to get all the items in one trip.

        <h2>Tempering spices</h2>
        <ul>
          <li>Turmeric</li>
          <li>Mustard seeds</li>
          <li>Cumin seeds</li>
          <li>Dried red chilies</li>
          <li>Asafoetida</li>
        </ul>

        <h2>Lentils</h2>
        <ul>
          <li>Split pigeon pea / Kandhi pappu (Telugu) / Toor dal (Hindi)</li>
          <li>Split black gram / Minapa pappu (Telugu) / Urad dal (Hindi)</li>
          <li>Split Bengal gram / Senaga pappu (Telugu) / Channa dal (Hindi)</li>
        </ul>

        <h2>Masala spices</h2>
        <ul>
          <li>Red chili powder</li>
          <li>Cloves</li>
          <li>Cardamom</li>
          <li>Cinnamon bark</li>
          <li>Star anise</li>
        </ul>
      </div>
    </Layout>
  );
}