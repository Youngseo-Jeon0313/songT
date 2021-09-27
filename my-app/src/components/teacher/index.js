import React from 'react';
import "./index.css";

function TeacherPage() {

    return(
        <> 
        <div className="intro">
            <img className="teacherimg" src={"https://image.flaticon.com/icons/png/512/243/243278.png"} alt="선생님사진"></img>
            &nbsp;&nbsp;Teacher Introduction & Teaching Style</div>
        <br/>
        <div className="intro-box1">
            <div className="explanation">교사 경력 20년으로, 영어 교육 뿐만 아니라 학생들 태도/습관 잡는 것에 능통 !  <br/>
            학생들 특목고(외고, 자사고) , 사립 중학교 진학 다수</div>
        </div>
    <br/>
        <div className="intro-box2">
        <div className="explanation">초등학교 / 중학교 / 고등학교 입시와 내신 꼼꼼하고 철저하게 관리 </div>
        </div>
    <br/>
        <div className="intro-box3">
        <div className="explanation">독해노트, 문법 정리, 수준별 쪽지시험 등 꾸준한 노력을 통한 실력 향상 도모!</div>
        </div>
        <br/>
        <div className="intro-box4">
            <div className="explanation">자소서 첨삭 가능 <br/>
            (꾸준히 봐왔던 학생의 경우 자신의 길을 잘 찾을 수 있을 거에요ㅎㅎ) </div>
        </div>
        <br/>
        <div className="intro-box5">
            <div className="explanation">영어에 차차 흥미를 붙이는 수업 방식 <br/>
            영어 노래 암기 / 영어 스피킹 대회 등을 통해 친구들과 영어 공부를 흥미롭게, 재미를 붙여!            
            </div>
        </div>
        <br/>
        <div className="intro-box6">
            <div className="explanation">책임감 있으며, 티칭 위주의 면대면 수업
            <br/>코로나 상황이더라도 학생들과의 소통을 위해 줌보다는 방역수칙을 잘 지킨 면대면 수업 도모
            </div>
        </div>
        <br/><br/>
        </>
    );
}

export default TeacherPage;