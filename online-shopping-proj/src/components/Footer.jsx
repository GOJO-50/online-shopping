import styled from "styled-components"
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import WhatsApp from '@mui/icons-material/WhatsApp';
import Twitter from '@mui/icons-material/Twitter';
import Room from '@mui/icons-material/Room';
import Phone from '@mui/icons-material/Phone';
import Email from '@mui/icons-material/Email';

const Container = styled.div`
    display: flex;
    background-color: dodgerblue;
`
const Left =styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 25px;
`
const Logo = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Description = styled.p`
    margin: 25px 0px;
`
const SocialContainer = styled.div`
    display: flex;
    
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: White;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
`
const Center =styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap:  wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right =styled.div`
    flex: 1;
    padding: 20px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 60%;
`




const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>
                AYE Ventures
            </Logo>
            <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quos natus vitae maiores blanditiis. Enim architecto cupiditate quam fugiat ipsam. Aperiam, officia possimus dolorem voluptates iste perspiciatis eos tempora velit?
            </Description>
            <SocialContainer>
                <SocialIcon color="3b5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="25D366">
                    <WhatsApp/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>
                Useful Links
            </Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Stationaries</ListItem>
                <ListItem>Printing Services</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Orders</ListItem>
                <ListItem>New Products</ListItem>
                <ListItem>Terms</ListItem>
                <ListItem>About</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight: "10px"}}/>Lorem ipsum dolor sit.</ContactItem>
            <ContactItem><Phone style={{marginRight: "10px"}}/>+(220) 123 4883 </ContactItem>
            <ContactItem><Email style={{marginRight: "10px"}}/>ayeventures@sales.dev</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  )
}

export default Footer