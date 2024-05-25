// RealTimeTracking component
import React from "react";
import Map from "./Map"; // Import the map component for displaying real-time tracking

const RealTimeTracking = ({ userLocation }) => {
  return (
    <Map userLocation={userLocation} /> // Pass the user's real-time location to the Map component
  );
};

export default RealTimeTracking;
