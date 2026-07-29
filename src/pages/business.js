import React from "react";
import Layout from "../components/layout";

export default function Business() {
  return (
    <Layout
      menuItems={[
        { label: "food", to: "/food", class: "parent" },
        { label: "tech", to: "/tech", class: "parent" },
        { label: "chilicopter", to: "/business/chilicopter", class: "child" },
        { label: "popadums", to: "/business/popadums", class: "child" },
        { label: "everred", to: "/business/everred", class: "child" },
      ]}
    >
      <h1>Ventures</h1>
      <br/>
      <div>
        The idea of starting my own business has been on my mind for a while now. I remember, back in 2006, first
        thinking of making hot sauces and joking about it with my friends. The first time I gave it a serious thought,
        I started experimenting at home some time in 2018. I was doing all this on the side with a full time job. I was
        close to sales when the pandemic hit and I shut it all down. Ever since I felt a guilt of not seeing it through
        and so in 2024, I decided that I will give it my full attention - I quit my job and went all in.
        <br />
        <br />
        Today, I have a line of four hot sauces, two condiments, three beverages and am working on a line of healthy,
        naturally protein-rich, delicious snacks.
      </div>
    </Layout>
  )
}