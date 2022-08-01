import './App.css';
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Nav from './components/nav';
import MainPage from './components/main';
import MapContainer from './components/map';
import TeacherPage from './components/teacher';
import Results from './components/programs';
import Footer from './components/footer';
import Review from './components/review';
import Modalbox from './components/modal';
import Modalbox1 from './components/modal1'


function App() {
  
  const mobileWidth = 640; // 쪼그라들기 시작할 시점
React.useEffect(() => {
  const onResize = () => {
    const zoom = Math.min(window.innerWidth / mobileWidth, 1);
    document.documentElement.style.zoom = `${zoom}`;
  };
  onResize();
  window.addEventListener('resize', onResize);
  return () => window.removeEventListener('resize', onResize);
}, []);

  return (
    <BrowserRouter >
   <MainPage/>
   <Modalbox/>
   <Modalbox1/>
    <div className="text">
    <br/>
      안녕하세요!<br/> 
      김포 닥터잉글리쉬 영어 학원입니다!<br/>
      저는 선생님과 10년을 함께한 학생으로, 학원에 대해 소개해보려고 합니다.

      <br/><br/><br/>
      저희 학원은 김포 호수초등학교 앞에 위치해 초등학생 친구들이 학교 끝나고 오기에 매우 편리합니다.<br/>
      <br/>
      또 주변 중고등학교와도 가까워, 학교별 철저한 내신 관리를 진행하고 있습니다.   

    </div>

   <div className="mapcontainers" style={{
          width:'auto',
          justifyContent:'center'}}>
    <MapContainer/>
    </div><br/><br/>
    <div className="text">
      학원에 있는 강의실 모습입니다.<br/>
      조용히 집중할 수 있는 교실공간, 창문이 보여 조금 트인 공간에서 공부할 수 있는 공간도 있습니다. <br/>
      <br/><br/>
      넓은 복도 공간 활용으로 학원에 오시면 탁 트인 느낌을 느끼실 수 있습니다.<br/>

      
    </div>
    <br/><br/>
   <Nav/><br/>
    <br/><br/>
    <div className="text">
      수업은 어떤 식으로, 어떤 선생님들과 이루어지는지 살펴볼까요? <br/>
      학원에 계시는 선생님들은 경력이 20년이 넘으시는 베테랑 선생님들이십니다! <br/>
      선생님들께서는 영어 교육 뿐만 아니라 <span style={{color:'red'}}>초중고 전반에 거쳐 어떻게 공부해야 하는지,<br/>
      어떤 책을 써서 공부하는 게 좋은지, 또 어디 학교에 가서 공부를 하는 게 효율적일지에 대한<br/>
      전반적인 공부 관리</span>에 매우 능통하십니다. <br/><br/><br/>
      또 학생 개개인에게 관심을 가져주시고 학생들이 학교 생활 동안 
      왜 공부를 해야 하는지, <br/>또 나중에 어떤 일을 할 것인지에 대한 고민을 꾸준히 할 수 있도록 
      지도해주십니다.

      <br/><br/><br/>
    </div>
   <TeacherPage/>

    <div className="text">
    <br/>
      15년간 학생들의 진학결과입니다.
    </div>
      <Results/>

      <div className="text">선생님께 배웠던 학생들의 후기를 가져와봤습니다! </div>
      <Review />
      <Footer/>

        <Switch>
      <Route exact={true} path="./components/nav">
        <Nav />
      </Route>

      <Route exact={true} path="./components/main">
        <MainPage/>
      </Route>
      <Route exact={true} path="./components/teacher">
        <TeacherPage/>
      </Route>
      <Route exact={true} path="./components/map">
        <MapContainer/>
      </Route>
      <Route exact={true} path="./components/results">
        <Results/>
        </Route>
      <Route exact={true} path="./components/footer">
        <Footer/>
      </Route>
          </Switch>


       



     </BrowserRouter>
  );
}

export default App;
