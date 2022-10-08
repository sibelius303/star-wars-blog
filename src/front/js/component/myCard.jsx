import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function MyCard( detail ) {
  return (
                      <Card style={{ width: '18rem' }}> 						
					   <Card.Img variant="top" src="holder.js/100px180" />
     					 <Card.Body>
     						<Card.Title>{detail.name}</Card.Title>
     		 				  <Card.Text>
     			 		    <p>climate: {detail.climate}</p>
							<p>graviti: {detail.gravity}</p>
							<p>terrain: {detail.terrain}</p>
     		 			  </Card.Text>
    	  				 <Button variant="primary">More Details</Button>
			 			  </Card.Body>
  					 		 </Card>
  );
}

export default MyCard;