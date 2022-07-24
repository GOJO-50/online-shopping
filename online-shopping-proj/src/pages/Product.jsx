import styled from "styled-components"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Reviews from "../components/Reviews"
import Remove from '@mui/icons-material/Remove';
import Add from '@mui/icons-material/Add';

const Container = styled.div`
    
`
const MiniContainer = styled.div`
    padding: 60px 0px 0px 0px;

`
const Wrapper = styled.div`
    display: flex;
    padding: 50px;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`
const ImageContainer = styled.div`
    flex: 1;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Title = styled.h2`
    font-weight: 200;
`
const Description = styled.p`
    margin: 30px 0px 50px 0px;
    line-height: 170%;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 25px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 10px 0px ;

`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    margin-right: 5px;
    font-size: 20px;
    font-weight: 100;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    margin-top: 40px;
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    
`

const Amount = styled.span`
    width: 25px;
    height: 25px;
    border-radius: 20%;
    border:1px solid gray ;
    display: flex;
    align-items: center;
    justify-content: center;
    margin:  0px 5px;
`

const Button = styled.button`
    padding: 15px;
    border:2px solid dodgerblue;
    background-color: White;
    cursor: pointer;
    font-weight: 400;


    &:hover{
        background-color: lightgray;
        transform: scale(0.8);
        transition:all 1s ease-in-out ;
    }
`

const Product = () => {
  return (
    <Container>
        <Navbar />
        <MiniContainer>
        <Wrapper>
            <ImageContainer>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJjgHTlu-eaXGc9TaG2vngRiY1_zLwSWAkyA&usqp=CAUs" />
            </ImageContainer>
            <InfoContainer>
                <Title>Shoe</Title>
                <Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni illo in non, aperiam, voluptatum earum ex accusamus velit enim dignissimos repudiandae tempora cum quod quam officiis similique et harum. Eaque at perferendis distinctio dolor ducimus qui aut corporis est modi.</Description>
                <Price>GMD 500</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color:</FilterTitle>
                        <FilterColor color="Black"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="cyan"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size:</FilterTitle>
                        <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>Add To Cart</Button>
                </AddContainer>
                
            </InfoContainer>
        </Wrapper>
        </MiniContainer>
        <Reviews />
        <Footer/>
    </Container>
  )
}

export default Product