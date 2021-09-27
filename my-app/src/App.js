import './App.css';
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Nav from './components/nav';
import Transition from './components/transition';
import MainPage from './components/main';
import MapContainer from './components/map';
import TeacherPage from './components/teacher';
import Results from './components/programs';
import Footer from './components/footer';
import MapContainer2 from './components/map2';
import Journey from './components/journey';

function App() {


  return (
    <BrowserRouter>
   <MainPage/>
    <div className="text">
    <br/>
      안녕하세요 닥터 잉글리쉬 학원에 대해 소개해 보려고 합니다 :) <br/> 
      닥터 잉글리쉬는 고양시에서 운영되는 학원으로 학원 형식의 1호점과 공부방 형식의 2호점으로 이루어져 있어요!<br/>
      학원에 오는 길은 밑에 지도에서 확인해보실 수 있습니다 !<br/><br/><br/><br/>
      학원의 경우 김포 호수 초등학교 바로 앞에 위치해 있어 초등학생 친구들이 학교 끝나고 오기에 매우 가까운 위치에 있죠?<br/>
      또 2호점 공부방의 경우에는 고촌고등학교, 금란초등학교 앞에 있어 학생들이 오기 편하고, <br/>
      공부방에 모여서 내신 준비하기에도 매우 편합니다!
      

    </div>

   <div className="mapcontainers">
    <MapContainer/>
    <MapContainer2/>
    </div><br/><br/><br/>

    <div className="text">
      학원에 있는 강의실들부터 봐볼까요?? <br/>
      교실형태1의 경우처럼 조용히 집중할 수 있는 교실 공간이 3개 정도 마련되어 있구요, <br/>
      교실형태2의 경우처럼 창문이 보여 조금 트인 공간에서 공부할 수 있는 공간이 두 개, <br/>
      그리고 독서실형 교실이 마련되어 있어 학생들이 단어시험을 공부하거나 수업 전/후로 예습/복습할 수 있는 <br/>
      공간도 마련되어 있어 학생들의 공부습관 관리에 매우 도움이 됩니다! <br/><br/><br/>
      또 아이스크림이나 과자 등을 먹을 수 있는 휴식공간이 있구요,<br/>
       넓은 복도 공간 활용으로 학원에 오시면 탁 트인 느낌을 느끼실 수 있어요!<br/>
    </div>
    <br/><br/>
   <Nav/>
    <Transition/>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <div className="text">
      그렇다면 이렇게 학원 2개를 운영하실 정도로 부지런한 영어선생님은 어떤 분이실까요?? <br/>
      아이들과 부모님들께 항상 '송 선생님~'이라고 불리우시는 선생님께서는 교사 경력이 20년이나 되는 <br/>
      베테랑 선생님이십니다! <br/><br/><br/>
      저도 선생님과 10년이나 함께 했는데요,,ㅎㅎ<br/>
      선생님께서는 영어 교육 뿐만 아니라 초~중~고등학교 전반에 거쳐 어떤 커리큘럼으로 공부해야 하는지,<br/>
      어떤 책을 써서 공부하는 게 좋은지, 또 어디 학교에 가서 공부를 하는 게 효율적일지에 대한<br/>
      전반적인 것들에 매우 능통하신 분이십니다. <br/><br/><br/>
      또 학생 개개인에 매우 관심이 많으셔서 학생들이 학교 생활 동안 <br/>
      왜 공부를 해야 하는지, 또 나중에 어떤 일을 할 것인지에 대한 고민을 꾸준히 할 수 있도록 <br/>
      지도해주는 분이세요!<br/><br/><br/>
      
      그 누구보다도 학생을 위하시는,
      선생님의 티칭 스타일을 한 번 알아볼까요??

      <br/><br/><br/><br/>
    </div>
   <TeacherPage/>
   <div className="text">
     선생님께서 학생들과 함께 공부했던 모습들을 담은 사진들과 <br/>
     또 공부 뿐만 아니라 외국으로 여행 가서 경험도 많이 쌓고, <br/>
     또 연휴날이 되면 (크리스마스나 추석) 친구들과 함께 스피킹 대회나 팝송을 <br/>
     부르며 시시한 영어 공부가 아닌 놀이터에서 노는 것보다 재밌었던 학원 사진들을 가져와 보았습니다 ! <br/>
   </div>

   <br/><br/>
    <Journey/>

    <div className="text">
    <br/><br/>
      15년간 학생들의 진학결과를 소개해보려고 합니다~
    </div>
      <Results/>
      <Footer/>

        <Switch>
      <Route exact={true} path="./components/nav">
        <Nav />
      </Route>
      <Route exact={true} path="./components/transition">
        <Transition/>
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
