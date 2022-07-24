import styled from 'styled-components'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top:0;
  left: 0;
  background-color: rgba(0,0,0,0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 1s ease;
`
const Container = styled.div`
  flex: 1;
  margin: 10px;
  min-width: 250px;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  

  &:hover ${Info}{
    opacity: 1;
  }
`
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white; 
  position: absolute;
`
const Image = styled.img`
  width: 90%;
  height: 75%;
  z-index: 2;
`
const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  display: flex; 
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 1s ease;
  cursor: pointer;

  &:hover{
    background-color: lightskyblue;
    transform: scale(1.5);
  }
`

const Product = ({item}) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
          <Icon>
              <ShoppingCartIcon />
          </Icon>
          <Icon>
              <SearchIcon />
          </Icon>
          <Icon>
              <FavoriteBorderIcon />
          </Icon>
      </Info>
    </Container>
  )
}

export default Product