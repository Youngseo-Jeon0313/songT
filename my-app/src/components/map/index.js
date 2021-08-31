/*global kakao*/
import {React, useEffect} from 'react';
import "./index.css";


const MapContainer = () => {
        useEffect(()=>{
          var container = document.getElementById('map');
          var options = {
            center: new kakao.maps.LatLng(37.650651297000685, 126.63311200374338),
            level: 3
          };
      
          var map = new kakao.maps.Map(container, options);
          var markerPosition  = new kakao.maps.LatLng(37.650651297000685, 126.63311200374338); 
          var marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);
      
          }, [])
    return (
        <>
        <br/><br/><br/>
        <div className="howtocome"><img className="mapimg"src="https://img-premium.flaticon.com/png/512/2969/2969964.png?token=exp=1630386392~hmac=f1aee30e6e50fba925ea82b7a9422f29"/>HOW TO COME</div>
        <div id="map" style={{
            width: '500px',
            height: '500px',
        }}>

        </div>
        </>
    )
}

export default MapContainer;
