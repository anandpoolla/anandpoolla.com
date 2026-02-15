import React from "react";
import Layout from "../components/layout";
import FoodTemplate from "../templates/food"

const  FoodPage = ({
  data: {
    allMarkdownRemark: { edges }
  }, }) => {
  const Posts = edges
    .filter(edge => edge.node.frontmatter.slug)
    .map(edge => <FoodTemplate key={edge.node.id} data={edge.node} />)
    // return (
    //   <Layout
    //     menuItems={[
    //       { label: "about", to: "/about", class: "parent" },
    //       { label: "tech", to: "/tech", class: "parent" },
    //       { label: "pantry", to: "/food/pantry", class: "child" }
    //     ]}
    //   >
    //     <h1>Recipes</h1>
    //
    //
    //   </Layout>
    // );
  return (<Layout>{Posts}</Layout>)
}

export default FoodPage;