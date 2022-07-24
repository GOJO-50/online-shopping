import styled from "styled-components"
import Navbar from "../components/Navbar"
import Products from "../components/Products"
import Reviews from "../components/Reviews"
import Footer from "../components/Footer"

  const Container = styled.div`
    
  `
  const Productpage = styled.div`
    padding: 60px 0px 0px 0px;
  `
  const Title = styled.h1`
    margin: 20px;
  `
  const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
  `
  const Filter = styled.div`
    margin: 20  px;
  `
  const FilterText = styled.span`
   font-style: 20px;
    font-weight: 600;
    margin-right: 20px;
`
const Select = styled.select`
  padding: 10px;
  margin-right: 10px;
`
const Option = styled.option``

const ProductList = () => {
  return (
    <Container>
        <Navbar />
       <Productpage>
       <Title> Stationaries </Title>
          <FilterContainer>
             <Filter>
              <FilterText>Filter Products:</FilterText>
              <Select>
                <Option disabled selected>
                  Color
                </Option>
                <Option>Black</Option>
                <Option>White</Option>
                <Option>Blue</Option>
                <Option>Red</Option>
                <Option>Yellow</Option>
              </Select>
              <Select>
                <Option disabled selected>
                  Size
                </Option>
                <Option>Small</Option>
                <Option>Medium</Option>
                <Option>Large</Option>
                <Option>Extra Large</Option>
              </Select>
              </Filter>
              
             <Filter>
              <FilterText>Sort Products:</FilterText>
              <Select>
                <Option selected>
                  Newest
                </Option>
                <Option>Oldest</Option>
                <Option>Price (asc)</Option>
                <Option>pricec (desc)</Option>
              </Select>
              </Filter>
          </FilterContainer>
          <Products />
          <Reviews />
          <Footer />
       </Productpage>
    </Container>
  )
}

export default ProductList