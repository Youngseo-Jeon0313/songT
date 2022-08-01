import React from 'react'
import Modal from 'react-modal';
import "./index.css";
import {useState} from 'react';

function Modalbox() {
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
                            position:'absolute',
                            top: 0, left: 0, width:"1000px", height:"420px", 
                            backgroundColor: "rgba(255, 255, 255, 0.45)",
                            zIndex: 10
                        },
                        content: {
                            position:"absolute",
                            background: "#CFF0CC",
                            overflow: "auto",
                            top:"40px",
                            left:"40px",
                            right:"40px",
                            bottom: "40px",
                            WebkitOverflowScrolling:"touch",
                            borderRadius:"4px",
                            outline:"none",
                            zIndex:10
                    }
                }}
                ariaHideApp={false}
            >
                <h3>참고해주세요.</h3>
                <h2>★해당건물 408호에서 305호로 이전</h2>
                <h2>★상담 예약 필수<br/></h2>
                <h2>★차량 운행 X</h2>
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


export default Modalbox;