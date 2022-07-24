import styled from "styled-components"

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20%;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
`;
const Title = styled.h1`
  color: lightblue;
  margin-top:  20px;

`;
const Button = styled.button`
  border: none;
  padding: 8px;
  background-color: lightgray;
  color: blue;
  cursor: pointer;
  font-weight: 600;
  font-size: 11pt;
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>Shop Now</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem