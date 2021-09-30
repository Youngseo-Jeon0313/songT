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
  { id: 1, url: "https://i.postimg.cc/JhLwFXSd/Kakao-Talk-20210928-222038031.jpg" },
  { id: 2, url: "https://i.postimg.cc/v82Jvhhw/Kakao-Talk-20210830-024144550.jpg" },
  { id: 3, url: "https://i.postimg.cc/SKG5YfR5/Kakao-Talk-20210830-024152349.jpg" },
  { id: 4, url: "https://i.postimg.cc/k5Cz5pJK/Kakao-Talk-20210830-024144550-02.jpg" },
  { id: 5, url: "https://i.postimg.cc/zGQgHYyr/Kakao-Talk-20210928-154545798.jpg" },
  { id: 6, url: "https://i.postimg.cc/x1MBn229/Kakao-Talk-20210830-024144550-01.jpg" },
  { id: 7, url: "https://i.postimg.cc/kGZzvRxs/Kakao-Talk-20210928-222038031-01.jpg" },
  { id: 8, url: "https://i.postimg.cc/dVW3TX9w/Kakao-Talk-20210928-222038031-02.jpg" },
  { id: 9, url: "https://i.postimg.cc/L5B640Xd/Kakao-Talk-20210928-222038031-03.jpg" },
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