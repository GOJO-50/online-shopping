import Add from "@mui/icons-material/Add"
import Remove from "@mui/icons-material/Remove"
import styled from "styled-components"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Reviews from "../components/Reviews"

const Container = styled.div``

const MiniContainer = styled.div`
    padding-top: 60px;
`

const Wrapper = styled.div`
    padding: 20px;
`

const Title = styled.h1`
    text-align: center;
    font-weight: 200;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
`
const TopButton = styled.button`
    cursor: pointer;
    padding: 5px;
    font-weight: 500;
    border: ${(props) =>props.type === "filled" && "none"};
    background-color: ${(props) =>props.type === "filled" ? "black" : "transparent"};
    color: ${(props) =>props.type === "filled" && "white"};

    &:hover{
        transition:all 1s ease;
        transform: scale(1.1);
    }
`
const Bottom = styled.div`
    margin: 20px 0px;
    display: flex;
    `
const TopTexts = styled.div``
const TopText = styled.span`
    cursor: pointer;
    text-decoration: underline;
    margin: 0px 10px;
`
const Info =styled.div`
    flex:3;
    `
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0px;
    `
const ProductDetail = styled.div`
    flex:2;
    display: flex;
    `
const Image = styled.img`
    width: 200px;
    height: 250px;
    `
const Details = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    `
const ProductName = styled.span`

`
const ProductId = styled.span`

`
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`
const ProductSize = styled.span`

`
const PriceDetail = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    `
const Counter= styled.div`
    display: flex;
    align-items: center;
`
const ProductAmount = styled.div`
    margin: 5px;
    font-size: 16pt;
    `
const ProductPrice = styled.div`
    font-size: 22pt;
    font-weight: 200;
    margin: 20px 0px;
`
const Hr = styled.hr`
    border: none;
    background-color: gray;
    height: 2px;
`
const Summary =styled.div`
        flex:1;
        border:0.3px solid gray ;
        border-radius: 10px;
        padding: 20px;
        height: 60vh;
`
const Button = styled.button`
    cursor: pointer;
    padding: 10px;
    background-color: gray;
    border: none;

    &:hover{
        background-color: dodgerblue;
        border: none;
        transform: scale(1.1);
        transition: all 0.5s ease;
    }
`
const SummaryTitle = styled.h1`
    font-weight: 100;
`
const SummaryItem = styled.span`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=> props.type === "total" && "500"};
    font-size: ${props=> props.type === "total" && "18pt"};
`
const SummaryItemPrice = styled.span`
    
`
const SummaryItemText = styled.span`

`

const Cart = () => {
  return (
    <Container>
        <Navbar />
        <MiniContainer>
            <Wrapper>
                <Title>YOUR CART</Title>
                <Top>
                    <TopButton>Continue Shopping</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag (2)</TopText>
                        <TopText>Your Wishlist (4)</TopText>
                    </TopTexts>
                    <TopButton type="filled">Checkout</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaVAlAK1bwEfVHMEpJiHlwEp3zZEHFv0y6zA&usqp=CAU"/>
                                <Details>
                                    <ProductName><b>Product:</b> Bag pack</ProductName>
                                    <ProductId><b>ID:</b> 827 87438</ProductId>
                                    <ProductColor color="darkblue"/>
                                    <ProductSize><b>Size:</b> L</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <Counter>
                                  <Add />
                                  <ProductAmount>3</ProductAmount>
                                  <Remove/>
                                </Counter>
                                <ProductPrice>GMD 600</ProductPrice> 

                            </PriceDetail>
                        </Product>

                        <Hr />

                        <Product>
                            <ProductDetail>
                                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR11QKa4KBcN3mIhdOAGvnKIdGoN13IVqSX7Q&usqp=CAU"/>
                                <Details>
                                    <ProductName><b>Product:</b> Pencil Case</ProductName>
                                    <ProductId><b>ID:</b> 927 27292</ProductId>
                                    <ProductColor color="dodgerblue"/>
                                    <ProductSize><b>Size:</b> M</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <Counter>
                                  <Add />
                                  <ProductAmount>1</ProductAmount>
                                  <Remove/>
                                </Counter>
                                <ProductPrice>GMD 250</ProductPrice> 

                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>GMD 850</SummaryItemPrice>
                        </SummaryItem>                        
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipment</SummaryItemText>
                            <SummaryItemPrice>GMD 200</SummaryItemPrice>
                        </SummaryItem>                        
                        <SummaryItem>
                            <SummaryItemText>Shipment Discount</SummaryItemText>
                            <SummaryItemPrice>GMD -200</SummaryItemPrice>
                        </SummaryItem>                        
                        <SummaryItem type="total">
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice>GMD 850</SummaryItemPrice>
                        </SummaryItem>
                        <Button>Checkout Now</Button>                    
                    </Summary>
                </Bottom>
            </Wrapper>
        </MiniContainer>
        <Reviews />
        <Footer />
    </Container>
  )
}

export default Cart