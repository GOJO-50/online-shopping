import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import styled from "styled-components";


const Container = styled.div`
width: 100%;
height: 100vh;
background-color: lightcoral;
display: flex;
position: relative;
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
`
const Wrapper = styled.div`
    height: 100%;
`

const Slide = styled.div`
    display: flex;
    align-items: center;
`
const Image = styled.img`
    width: 90%;
`
const ImageContainer = styled.div`
    flex: 1;
`
const InfoContainer = styled.div`
    flex: 1;
`


const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
                <ArrowCircleLeftIcon />
        </Arrow>
        <Wrapper>
            <ImageContainer>
                <Image src="https://images.freeimages.com/images/large-previews/6d8/stationery-1238915.jpg"/>
            </ImageContainer>
            <InfoContainer></InfoContainer>
        </Wrapper>
        <Arrow direction="right">
                <ArrowCircleRightIcon />
        </Arrow>
    </Container>
  )
}

export default Slider