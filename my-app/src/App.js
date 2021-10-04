import './App.css';
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Nav from './components/nav';
import MainPage from './components/main';
import MapContainer from './components/map';
import TeacherPage from './components/teacher';
import Results from './components/programs';
import Footer from './components/footer';
import MapContainer2 from './components/map2';
import Journey from './components/journey';
import Review from './components/review';
function App() {


  return (
    <BrowserRouter>
   <MainPage/>
    <div className="text">
    <br/>
      닥터 잉글리쉬 학원입니다 :) <br/> 
      저희 학원은 김포에서 운영되는 초/중/고 영어 학원으로 학원 형식의 1호점과 공부방 형식의 2호점으로 이루어져 있어요!<br/>
      저는 선생님과 10년을 함께한 학생으로, 학원을 소개하려고 해요 :)
      <br/><br/><br/><br/>
      밑에 사진을 보면 아시다시피,<br/>
      1호점의 경우 김포 호수 초등학교 바로 앞에 위치해 있어 초등학생 친구들이 학교 끝나고 오기에 매우 편리합니다.<br/>
      2호점 공부방의 경우에도 고촌고등학교, 금란초등학교 앞에 있어 학생들이 오기 편하고, <br/>
      주변에 고등학교가 고촌고등학교 뿐이라 고촌고 학생들을 대상으로 철저한 내신 관리가 가능해요.      

    </div>

   <div className="mapcontainers">
    <MapContainer/>
    <MapContainer2/>
    </div><br/><br/><br/>

    <div className="text">
      학원에 있는 강의실들을 확인해 볼까요?? <br/>
      1호점 학원에는 조용히 집중할 수 있는 교실공간도 있고, <br/>
      창문이 보여 조금 트인 공간에서 공부할 수 있는 공간도 있습니다. <br/>
      또, 독서실형 교실은 학생들이 단어시험을 공부하거나 수업 전/후로 예습/복습할 수 있어서 <br/>
      학생들의 공부습관 관리에 매우 도움이 됩니다! <br/><br/><br/>
      또 아이스크림이나 과자 등을 먹을 수 있는 휴식공간이 있구요,<br/>
      넓은 복도 공간 활용으로 학원에 오시면 탁 트인 느낌을 느끼실 수 있어요!<br/>
      <br/><br/>
      2호점 독서실형 학원은 아파트 형식으로, <br/>
      카페형 책상이 준비되어 있어 학생들이 편안하게 앉아서 공부할 수 있어요.<br/>
      또 모여서 그룹처럼 이루어 공부하기에도 편합니다.
    </div>
    <br/><br/>
   <Nav/><br/>
    <br/><br/><br/><br/>
    <div className="text">
      학원 선생님들과 어떤 식의 수업이 이루어지는지 알아볼까요? <br/>
      학원에 계시는 선생님들은 경력이 20년이 넘으시는 베테랑 선생님들이십니다! <br/>
      선생님들께서는 영어 교육 뿐만 아니라 <span style={{color:'red'}}>초중고 전반에 거쳐 어떻게 공부해야 하는지,<br/>
      어떤 책을 써서 공부하는 게 좋은지, 또 어디 학교에 가서 공부를 하는 게 효율적일지에 대한<br/>
      전반적인 공부 관리</span>에 매우 능통하십니다. <br/><br/><br/>
      또 학생 개개인에게 관심을 가져주시고 학생들이 학교 생활 동안 <br/>
      왜 공부를 해야 하는지, 또 나중에 어떤 일을 할 것인지에 대한 고민을 꾸준히 할 수 있도록 <br/>
      지도해주세요!<br/><br/><br/>
      
      그 누구보다도 학생을 위하시는,
      선생님들의 티칭 스타일을 한 번 알아볼까요??

      <br/><br/><br/><br/>
    </div>
   <TeacherPage/>
    <Journey/>

    <div className="text">
    <br/><br/>
      15년간 학생들의 진학결과를 한 번 볼까요??
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

      <Route exact={true} path="./components/journey">
        <Journey/>
      </Route>
          </Switch>


       



     </BrowserRouter>
  );
}

export default App;
