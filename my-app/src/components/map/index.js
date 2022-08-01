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
        <div className="maps" >
        <br/><br/><br/><br/>
      
        <div className="address">
          <div>1호점 - 학원</div>
          <div>김포시 구래동 김포한강4로 420번길 88수퍼스타 타워 305호</div></div> 
        <div id="map" style={{
            width: '700px',
            height: '500px',
            display:'flex',
            justifyContent:'center'
        }}>
        </div>
        
        </div>
    )
}

export default MapContainer;