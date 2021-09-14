import React from "react";
import { Card } from "react-bootstrap"
import {Link} from "react-router-dom"

export default function CountryList(props) {
  const name= props.data.name;
  return (
    <Link to={`/detail/${name}`}>
    <Card className="me-0 me-md-5">
      <Card.Img variant="top" alt="" src={props.data.flag} />
      <Card.Body>
        <Card.Title className="fw-bold">{props.data.name}</Card.Title>
          <ul className=" mt-4 mb-4 list-unstyled">
            <li className="border-0 p-0"> Population:<span className="lightGray"> {props.data.population.toLocaleString("en-US")}</span></li>
            <li className="border-0 p-0">Region: <span className="lightGray"> {props.data.region}</span></li>
            <li className="border-0 p-0">Capital: <span className="lightGray"> {props.data.capital}</span></li>
          </ul>
      </Card.Body>
    </Card>
    </Link>
  )
}
