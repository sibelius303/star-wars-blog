import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { ReactPropTypes } from "react";


function MyPeopleCard( detalle ) {
  return (
                      <Card style={{ width: '18rem' }}> 						
					   <Card.Img variant="top" src="holder.js/100px180" />
     					 <Card.Body>
     						<Card.Title>{detalle.name}</Card.Title>
     		 				  <Card.Text>
                                eye color: {detalle.eye_color}
								gender: {detalle.gender}
								hair color: {detalle.hair_color}
     		 			  </Card.Text>
    	  				 <Button variant="primary">More Details</Button>
			 			  </Card.Body>
  					 		 </Card>
  );
}

export default MyPeopleCard;