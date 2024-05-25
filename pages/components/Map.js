import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2hyZXlhc2h2YXJzaG4iLCJhIjoiY2x3amxpNWlpMHc0MDJsa3h4OTh1NzV5NCJ9.WDPDfg-PwoHjPbHqbve8Dg";

const Map = (props) => {
  console.log(props)


  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-99.29011, 39.39172],
      zoom: 3,
    });

   if(props.pickupCoordinates){
    addToMap(map,props.pickupCoordinates)
   }

   if(props.dropoffCoordinates){
    addToMap(map, props.dropoffCoordinates)
   }

   
  if(props.pickupCoordinates && props.dropoffCoordinates){
    map.fitBounds([
      props.dropoffCoordinates,
      props.pickupCoordinates
    ])
  }
 
  },[props.pickupCoordinates, props.dropoffCoordinates]);


  const addToMap = (map, coordinates) =>{
    const marker1 = new mapboxgl.Marker()
    .setLngLat(coordinates)
    .addTo(map);
  }

  // useEffect(()=>{
  //    if(pickupCoordinates){
  //     addToMap()
  //    }
  // },[props.pickupCoordinates, props.dropoffCoordinates])

  return <Wrapper id="map"></Wrapper>;
}
export default Map

const Wrapper = tw.div`
 flex p-40 h-1/2
`

