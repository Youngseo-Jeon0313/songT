import React from 'react'
import Modal from 'react-modal';
import "./index.css";
import {useState} from 'react';

function Modalbox1() {
    const [showModal, setShowModal] =useState(true);
    const closeModal=()=>{
      setShowModal(false);
    }

    return (
        <>
            { showModal && <Modal
                isOpen={true}
                style={{
                        overlay: {
                            position: 'absolute',
                            top: "420px", left: 0, width:"1000px", height:"500px", 
                            backgroundColor: "rgba(255, 255, 255, 0.45)",
                            zIndex: 10
                        },
                        content: {
                            position:"absolute",
                            background: "#ddddff",
                            overflow: "auto",
                            top:"40px",
                            left:"40px",
                            right:"40px",
                            bottom: "40px",
                            WebkitOverflowScrolling:"touch",
                            borderRadius:"4px",
                            outline:"none",
                            zIndex:10,
                            
                    }
                }}
                ariaHideApp={false}
            >
                <h3>학원 주요 수업 내용</h3>
                <h2>★중고등생 철저한 내신 관리</h2>
                <h2>★영어인증시험 준비<br/>TOSEL, JET, 주니어토플 등</h2>
                <h2>★초등생의 경우 영어와 친해지도록,<br/>
                중학생의 경우 고등학교 과정을 끝내도록,<br/> 고등학생의 경우 고정1등급을 위해 노력합니다.</h2>
                <button onClick={closeModal} style={{
                    width:100,
                    height:50,
                    backgroudColor: '#3CB371',
                    fontSize:20,
                    cursor:'pointer',
                    border:'3px solid #77DD66'

                }}>창 닫기</button>
            </Modal>}
            
        </>
    );
}


export default Modalbox1;