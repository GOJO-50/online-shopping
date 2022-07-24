import styled from "styled-components"
import { reviews } from "../data"
import Customers from "./Customers"

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 100px 0px;
    flex-wrap: wrap;
    background-color: lightcyan;
`


const Reviews = () => {
  return (
    <Container>
        {reviews.map((item)=>(
            <Customers item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default Reviews