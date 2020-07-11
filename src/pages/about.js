import React from "react";
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout menuItems={[]}>
      <h2>About me</h2>

      <p>
        I was born in Secunderabad, Telangana State, India in 1977 and grew up moving all around the country and abroad.
        I moved to the United States in the year 2000 to study my Master's degree and have lived here since. I became a
        citizen of the United States in 2019.<br/><br/>

        My father is a retired officer of the Indian Air Force (hence the moving around) and was a pioneer in their
        computer science program. When I was ten years old, he bought our first Personal Computer -
        the <a href="https://en.wikipedia.org/wiki/ZX_Spectrum#ZX_Spectrum_+3">Sinclair ZX Spectrum +3</a> and I took
        to writing code using the reference manual. They were silly programs and I had to lookup verbs in the manual
        that were synonyms to the action I needed; it was very trial-and-error but I quickly fell in love with coding.
        <br/><br/>

        My mother is an excellent cook; she can do no wrong in the kitchen. She is one of those people who can intuit
        the ingredients that go together to make a superb dish. Growing up, I was always curious about what she did
        and would constantly observe her while she cooked (many times to her detriment). I will never get close to the
        level of cook my Mother is - she was a stay-at-home Mom who whipped up three amazing meals every day of my life
        and so many other delicious snacks, drinks and accoutrements in between. But I am nevertheless curious and
        adventurous, especially so if I'm hosting guests.<br/><br/>

        My other interests are movies, music, books and DIY projects (I absolutely LOVE assembling furniture!)
      </p>

      <h2>Contact</h2>
      You can reach me at hello@anandpoolla.com
    </Layout>
  );
}