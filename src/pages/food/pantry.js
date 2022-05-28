import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../../components/layout";
import Ingredient from "../../components/ingredient"
import cloves from "../../images/cloves.jpg";
import salt from "../../images/salt.png"

export default function Pantry() {

  const data = useStaticQuery(graphql`{
    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      edges {
        node {
          extension
          name
        }
      }
    }
  }
  `)

  console.log(data.allFile.edges);

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

        <div className="ingredients">
          <Ingredient name="Clove" src={cloves} tags={["plant", "meat"]} usage={3} />
          <Ingredient name="Salt" src={salt} tags={["chemical"]} usage={5} />
        </div>

        <h2>Tempering spices</h2>
        <ul>
          <li>Turmeric powder</li>
          <li>Mustard seeds</li>
          <li>Cumin seeds</li>
          <li>Fenugreek seeds</li>
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