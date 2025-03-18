import React, { useEffect, useState } from "react";

const FoodList = ["Hamburger", "Pizza", "Tacos"];

const FakeApiCall = () =>
  new Promise((resolve) => setTimeout(resolve(FoodList), 2000));

export const AsyncList = () => {
  const [foodData, setFoodData] = useState([]);
  useEffect(() => {
    FakeApiCall().then((data) => setFoodData(data));
  }, []);
  return (
    <ul>
      {foodData.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
};
