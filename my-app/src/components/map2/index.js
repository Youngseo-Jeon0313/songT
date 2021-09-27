/*global kakao*/
import {React, useEffect} from 'react';
import "./index.css";


const MapContainer2 = () => {
        useEffect(()=>{
          var container = document.getElementById('map2');
          var options = {
            center: new kakao.maps.LatLng(37.59306003595292, 126.75776945028294),
            level: 3
          };
      
          var map2 = new kakao.maps.Map(container, options);
          var markerPosition  = new kakao.maps.LatLng(37.59306003595292, 126.75776945028294); 
          var marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map2);
      
          }, [])
    return (
        <div>
        <br/><br/><br/><br/>
        <div className="address2">
        <div>2호점 - 공부방</div>
          <div>김포캐슬앤파밀리에시티(공부방)</div></div>
        <div id="map2" style={{
            width: '400px',
            height: '400px',
        }}>

        </div>
        </div>
    )
}

export default MapContainer2;