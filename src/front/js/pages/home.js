import React, { useContext, useEffect, useState, ReactPropTypes } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import MyPeopleCard from "../component/MyPeopleCard.jsx";
import MyPlanetsCard from "../component/MyPlanetsCard.jsx";
import MyVehiclesCard from "../component/MyVehiclesCard.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getPeople();
    actions.getPlanets();
    actions.getVehicles();
  }, []);

  return (
    <div style={{backgroundImage: "url('https://fondosmil.com/th/10787.jpg')"}} className="containerApp">
      <div className="container">
        <h2 style={{color:"yellow", marginTop:"40px"}}>CHARACTERS</h2>
        <div className="containerPeople">
          {store.people?.map((person, index) => {

            return <MyPeopleCard details={person} key={index} id={index+1}/>;
            
          })}
        </div>
        <h2 style={{color:"yellow", marginTop:"40px"}}>PLANETS</h2>
        <div className="containerPlanets">
          {store.planets?.map(( planet,index ) => {
            return (
              <MyPlanetsCard key={index} details={planet} id={index+1}/>
            );
          })}
        </div>
        <div className="containerVehicles">
          {store.vehicles?.map(( vehicles,index ) => {
            return (
              <MyVehiclesCard details={vehicles} key={index} id={index +1}/>
            );
          })}
        </div>
      </div>
    </div>
  );
};
