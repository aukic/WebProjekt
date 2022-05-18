import { Button } from "react-bootstrap";
import React, { Component } from "react";
import "./popup.css";
import ImageSlider from "./ImageSlider";
function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <ImageSlider slides={props.img} />
        <h4 className="card-title m-4">{props.name}</h4>
        <div className="m-2 text-start">
          <span>Year: </span>
          {props.year}
        </div>
        <div className="m-2 text-start">
          <span>Price: {props.price} $</span>
        </div>
        <div className="m-2 text-start">
          <span>Milage: {props.mileage} km</span>
        </div>
        <div className="m-2 text-start">
          <span>Acceleration: </span>
          {props.acceleration}
        </div>
        <div className="m-2 text-start">
          <span>Cylinders: </span>
          {props.cylinders}
        </div>
        <div className="m-2 text-start">
          <span>Displacement: </span>
          {props.displacement}
        </div>
        <div className="m-2 text-start">
          <span>Horsepower: </span>
          {props.horespower}
        </div>
        <div className="m-2 text-start">
          <span>Miles per galon: </span>
          {props.milesPerGalon}
        </div>
        <div className="m-2 text-start">
          <span>Origin: </span>
          {props.origin}
        </div>
        <div className="m-2 text-start">
          <span>Weight in lbs: </span>
          {props.weight}
        </div>
        <Button className="primary m-2">Buy</Button>
        <Button
          className="close-btn m-2"
          onClick={() => props.setTrigger(false)}
        >
          close
        </Button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
