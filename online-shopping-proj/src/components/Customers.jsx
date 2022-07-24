import styled from "styled-components"
import Rate from '@mui/icons-material/StarBorder';

const Container = styled.div`
  flex: 1;
  margin: 20px 50px;
  min-width: 300px;
  min-height: 100px;
`
const Description = styled.p`
    margin-top: 10px;
    line-height: 170%;
`
const Symbol = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`


const Customers = ({item}) => {
  return (
    <Container>
        <Symbol>
        <Rate/> <Rate/> <Rate/> <Rate/> <Rate/>
        </Symbol>
        <Description>
            {item.desc}
        </Description>
    </Container>
  )
}

export default Customers