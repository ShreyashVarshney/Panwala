// RealTimeTracking component
import React from "react";
import Map from "./Map"; 

const RealTimeTracking = ({ userLocation }) => {
  return (
    <Map userLocation={userLocation} /> 
  );
};

export default RealTimeTracking;
