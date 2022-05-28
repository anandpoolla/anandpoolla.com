import React from "react";

export default function Ingredient(props) {
  const usageSymbol = {
    1: "1️⃣",
    2: "2️⃣",
    3: "3️⃣",
    4: "4️⃣",
    5: "5️⃣"
  }

  const tagSymbol = {
    "plant": "🥕",
    "chemical": "🧪",
    "dairy": "🥛",
    "eggs": "🥚",
    "gluten": "🍞",
    "meat": "🥩",
    "nuts & legumes": "🥜",
    "poultry": "🍗",
    "seafood": "🐟",
    "shellfish": "🍤"
  }

  return (
    <div className="ingredient">
      <div className="ingredient-name">{props.name}</div>
      <img className="ingredient-image" src={props.src}/>
      <div className="ingredient-symbols">
        <div className="ingredient-symbol">
          {props.tags && props.tags.map(
            (tag, key) => <span key={key} className="symbol-tag">{tagSymbol[tag]}</span>
          )}
        </div>
        <div className="ingredient-symbol">
          {usageSymbol[props.usage]}
        </div>
      </div>
    </div>
  )
}