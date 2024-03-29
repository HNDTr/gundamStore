import { styled } from "styled-components"
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useState } from "react";
import { sliderItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;    
    position: relative;
    overflow: hidden;
    ${mobile({display: "none"})}
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === 'left' && '10px'};
    right: ${props=> props.direction === 'right' && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideindex * -100}vw);
`;

const Slide = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'slideindex' && prop !== 'bg',
  })`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${(props) => props.bg};
  `;
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`

const Image = styled.img`
    height: 100%;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`

const Title = styled.h1`
    font-size: 70px;
`

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`


function Slider() {
    const [slideindex, setslideindex] = useState(0)

    const handleClick = (direction) => {
        if(direction==="left"){
            setslideindex(slideindex > 0 ? slideindex-1 : 2)
        }else{
            setslideindex(slideindex < 2 ? slideindex+1 : 0)
        }
    };
  return (
    <Container>
        <Arrow direction='left' onClick={() => handleClick("left")}>
            <ArrowLeftIcon></ArrowLeftIcon>
        </Arrow>
        <Wrapper slideindex={slideindex}>
            {sliderItems. map((item) => (
                <Slide bg={item.bg} key={item.id}>
                <ImgContainer>
                    <Image src={item.img}></Image>
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
            </Slide>
            ))}
        </Wrapper>
        <Arrow direction='right' onClick={() => handleClick("right")}>
            <ArrowRightIcon></ArrowRightIcon>
        </Arrow>
    </Container>
  )
}

export default Slider
