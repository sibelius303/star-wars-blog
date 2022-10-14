import React, { useContext, useEffect, useState, ReactPropTypes } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import MyPeopleCard from "../component/MyPeopleCard.jsx";
import MyPlanetsCard from "../component/MyPlanetsCard.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);

  const getPeople = async () => {
    try {
      const response = await fetch("https://swapi.dev/api/people");
      const data = await response.json();
      setPeople(data.results);
      console.log(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getPlanets = async () => {
    try {
      const response = await fetch("https://swapi.dev/api/planets");
      const data = await response.json();
      setPlanets(data.results);
      console.log(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPeople();
    getPlanets();
  }, []);

  return (
    <div className="containerApp">
      <div className="container">
        <h2>Characters</h2>
        <div className="containerPeople">
          {people.map((person, id) => {
            return <MyPeopleCard details={person} key={id}/>;
          })}
        </div>
        <h2>Planets</h2>
        <div className="containerPlanets">
          {planets.map(( planet,id ) => {
            return (
              <MyPlanetsCard key={id} details={planet}/>
            );
          })}
        </div>
      </div>
    </div>
  );
};
