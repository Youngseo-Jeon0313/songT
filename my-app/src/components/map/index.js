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
        <div className="maps">
        <br/><br/><br/><br/>
        <div className="howtocome"><img className="mapimg" src="https://cdn.icon-icons.com/icons2/2073/PNG/512/location_map_twitter_icon_127126.png" alt="지도 이미지"/>&nbsp;&nbsp;&nbsp;&nbsp;HOW TO COME</div>
        <div className="address">경기도 김포시 김포한강4로420번길 88 / 408호(김포 호수 초등학교 앞!)</div>
        <div id="map" style={{
            width: '400px',
            height: '400px',
        }}>

        </div>
        </div>
    )
}

export default MapContainer;