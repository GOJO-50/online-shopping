import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useState } from 'react';
import styled from "styled-components";
import {sliderItems} from '../data';


const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
`

const Arrow = styled.div`
width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition:all 2s ease ;
    transform: translateX(${props => props.slideIndex * -100}vw);
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};
`
const Image = styled.img`
    height: 100%;
    width: 100%;
`
const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 40px;
`
const Title = styled.h1`
    font-size: 75px;
 `
const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    letter-spacing: 2px;
`
const Button = styled.button`
    padding: 5px;
    cursor: pointer;
    background-color: transparent;
    font-size: 14pt;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick= (direction) => {

        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
        }
        else {
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
        }
    };
    
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowCircleLeftIcon />
        </Arrow>

        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map(item => (
                  <Slide bg={item.bg} key={item.id}>
                  <ImageContainer>
                      <Image src={item.img}/>
                  </ImageContainer>
                  <InfoContainer>
                      <Title>{item.title}</Title>
                      <Description>{item.description}</Description>
                      <Button>View Product</Button>
                  </InfoContainer>
                  </Slide>
            ))}
        </Wrapper>

        <Arrow direction="right"onClick={()=>handleClick("right")}>
                <ArrowCircleRightIcon />
        </Arrow>
    </Container>
  )
}

export default Slider