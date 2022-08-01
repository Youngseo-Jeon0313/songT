import {React, Component} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from 'styled-components';
import "./index.css";

const Container = styled.div`
  overflow:hidden;
`;

const StyledSlider = styled(Slider)`
    .slick-slide div{
      outline: none;
    }
`;

const ImageContainer = styled.div`
  margin: 0 16px;
`;

const Image = styled.img`
max-width:100%;
max-height:100%;
`;

const items = [
  { id: 1, url: "https://ifh.cc/g/pZzhkp.jpg" },
  { id: 2, url: "https://ifh.cc/g/kt3OA2.jpg" },
  { id: 3, url: "https://ifh.cc/g/S7m2dH.jpg" },
  { id: 4, url: "https://ifh.cc/g/RwAQjw.jpg" },
  { id: 5, url: "https://ifh.cc/g/h0SlsF.jpg" },
  { id: 6, url: "https://ifh.cc/g/v5hvht.jpg" },
  { id: 7, url: "https://ifh.cc/g/XlA8rJ.jpg" },
  { id: 8, url: "https://ifh.cc/g/WO6ta3.jpg" },
  { id: 9, url: "https://ifh.cc/g/RNQq4N.jpg" },
  { id: 10, url: "https://ifh.cc/g/1vtfmg.jpg"},

];


class Nav extends Component {
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            centerMode: true,
          };
          return (
            <Container className="container">
              <h2> 좌우로 사진을 넘겨 학원 모습을 확인하세요.</h2>
              <StyledSlider {...settings}
              >
                {items.map(item => {
                  return (
                    <div key={item.id}>
                      <ImageContainer>
                        <Image src={item.url} />
                      </ImageContainer>
                    </div>
                  );
                })}
              </StyledSlider>
            </Container>
          );
        }
      }

export default Nav;