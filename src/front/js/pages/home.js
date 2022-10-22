import React, { useContext, useEffect, useState, ReactPropTypes } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import MyPeopleCard from "../component/MyPeopleCard.jsx";
import MyPlanetsCard from "../component/MyPlanetsCard.jsx";
import MyVehiclesCard from "../component/MyVehiclesCard.jsx";
import MyStarshipsCard from "../component/MyStarshipsCard.jsx";
import MySpeciesCard from "../component/MySpeciesCard.jsx";
import MyFilmsCard from "../component/MyFilmsCard.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getPeople();
    actions.getPlanets();
    actions.getVehicles();
    actions.getStarships();
    actions.getSpecies();
    actions.getFilms();
  }, []);

  return (
    <div style={{backgroundImage: "url('https://fondosmil.com/th/10787.jpg')"}} className="containerApp">
      <div className="container">
        <h2 style={{color:"yellow", marginTop:"40px"}}>CHARACTERS</h2>
        <div className="containerCard">
          {store.people?.map((person, index) => {

            return <MyPeopleCard details={person} key={index} id={index+1}/>;
            
          })}
        </div>
        <h2 style={{color:"yellow", marginTop:"40px"}}>PLANETS</h2>
        <div className="containerCard">
          {store.planets?.map(( planet,index ) => {
            return (
              <MyPlanetsCard key={index} details={planet} id={index+1}/>
            );
          })}
        </div>
        <h2 style={{color:"yellow", marginTop:"40px"}}>VEHICLES</h2>
        <div className="containerCard">
          {store.vehicles?.map(( vehicles,index ) => {
            return (
              <MyVehiclesCard details={vehicles} key={index} id={index +1}/>
            );
          })}
        </div>
        <h2 style={{color:"yellow", marginTop:"40px"}}>STARSHIPS</h2>
        <div className="containerCard">
          {store.starships?.map(( starship,index ) => {
            return (
              <MyStarshipsCard details={starship} key={index} id={index +1}/>
            );
          })}
        </div>
        <h2 style={{color:"yellow", marginTop:"40px"}}>SPECIES</h2>
        <div className="containerCard">
          {store.species?.map(( specie,index ) => {
            return (
              <MySpeciesCard details={specie} key={index} id={index +1}/>
            );
          })}
        </div>
        <h2 style={{color:"yellow", marginTop:"40px"}}>FILMS</h2>
        <div className="containerCard">
          {store.films?.map(( film,index ) => {
            return (
              <MyFilmsCard details={film} key={index} id={index +1}/>
            );
          })}
        </div>
      </div>
    </div>
  );
};
