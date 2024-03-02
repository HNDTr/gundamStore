import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import styled from 'styled-components';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.div`
    
`
    

const Desc = styled.p`
    margin: 20px 0px;

`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width:40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})}
`

const Title = styled.h3`
    margin-bottom: 30px;

`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%; 
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "lightGray"})}
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;

`

const Payment = styled.img`
    width: 50%;

`

function Footer() {
  return (
    <Container>
        <Left>
            <Logo>Huy.</Logo>
            <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam maxime numquam, nobis, dicta pariatur quibusdam dignissimos accusamus quis explicabo nemo commodi cumque non obcaecati porro omnis dolores enim, aliquam fugit!</Desc>
            <SocialContainer>
                <SocialIcon color='3B5999'>
                    <FacebookIcon></FacebookIcon>
                </SocialIcon>
                <SocialIcon color='E4405F'>
                    <TwitterIcon></TwitterIcon>
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <InstagramIcon></InstagramIcon>
                </SocialIcon>
                <SocialIcon color='E60023'>
                    <PinterestIcon></PinterestIcon>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Beginner kits</ListItem>
                <ListItem>Advance kits</ListItem>
                <ListItem>Tools</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <LocationOnIcon style={{marginRight: '10px'}}></LocationOnIcon>622 Dixie Path, South Tobinchester 98336
            </ContactItem>
            <ContactItem>
                <SmartphoneIcon style={{marginRight: '10px'}}></SmartphoneIcon>+1 234 567 8910
            </ContactItem>
            <ContactItem>
                <MailOutlineIcon style={{marginRight: '10px'}}></MailOutlineIcon>contact@huy.dev
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"></Payment>
        </Right>
    </Container>
  )
}

export default Footer