import React from "react";
import {Spinner} from 'react-bootstrap';
import "./Spinner.css";

const Spinners = () => (
  <>
  <Spinner animation="border" size="sm" />
  <Spinner animation="border" />
  <Spinner animation="grow" size="sm" />
  <Spinner animation="grow" />
  </>
  
);

export default Spinners;
