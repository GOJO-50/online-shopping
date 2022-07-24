import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255), rgba(0,0,255,0.5));

    display: flex;
    align-items: center;
    justify-content: right;
`

const Wrapper = styled.div`
   width: 30%;
   margin-right: 200px;
   background-color: lightgray;
   padding: 20px;
`
const Title = styled.h2`
    font-size: 24;

`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
   
`

const Input = styled.input`
    flex:1;
    min-width: 50%;
    margin: 20px 10px 0px 0px;
    padding: 10px;

`
const Agreement = styled.span`
    margin: 10px;
    font-size: 11pt;
`
const Button = styled.button`
    width: 25%;
    border: none;
    background-color: dodgerblue;
    color: white;
    cursor: pointer;
    padding: 5px;
    margin-left: 10px;

    &:hover{
        transform: scale(1.2);
        transition:all 1s ease ;
    }
`


const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="First Name"/>
                <Input placeholder="Last Name"/>
                <Input placeholder="Username"/>
                <Input placeholder="Number"/>
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm password"/>
                <Agreement> By Creating an account, I Agree to all terms and conditions on this website. <b>TERMS & CONDITIONS</b></Agreement>
                <Button>Register</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register