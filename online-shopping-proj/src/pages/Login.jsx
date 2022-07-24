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
   flex-direction: column;
   
`

const Input = styled.input`
    flex:1;
    min-width: 50%;
    margin: 20px 10px 0px 0px;
    padding: 10px;

`
const Link = styled.a`
    margin: 3px;
    font-size: 11pt;
    cursor: pointer;
    text-decoration: underline;
`
const Button = styled.button`
    width: 25%;
    border: none;
    background-color: dodgerblue;
    color: white;
    cursor: pointer;
    padding: 5px;
    margin: 10px;

    &:hover{
        transform: scale(1.2);
        transition:all 1s ease ;
    }
`

const Login = () => {
  return (
    <Container>
         <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="Username"/>
                <Input placeholder="Password"/>
                <Button>Login</Button>
                <Link>FORGET PASWORD?</Link>
                <Link>CREATE ACCOUNT</Link>
            </Form>
        </Wrapper>    
    </Container>
  )
}

export default Login