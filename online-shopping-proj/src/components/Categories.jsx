import styled from "styled-components"
import { categories } from "../data"
import CategoryItem from "./CategoryItem"

const Container = styled.div`
        display: flex;
        justify-content: space-between;
        background-color: lightcyan;
        padding: 100px 0px;
`
const Categories = () => {
  return (
    <Container>
        {categories.map(item => (
            <CategoryItem item={item} key={item.id}/>
        ))}
    </Container>

  )
}

export default Categories