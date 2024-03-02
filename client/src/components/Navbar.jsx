import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { mobile } from '../responsive';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/userSlice';

const Container = styled.div`
    height: 60px;
    ${mobile({height: "50px"})}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({padding: "10px 0px"})}
`;
const Left = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
`;
const Language = styled.span`
    font-size: 14px; 
    cursor: pointer;
    ${mobile({display: "none"})}
`;
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
    ${mobile({width: "50px"})}
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({justifyContent: "center", flex: 2})}
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 24px;
    ${mobile({fontSize: "12px", marginLeft: "10px"})}
`;

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize: "24px"})}
`;
const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const LogoutLink = styled(Link)`
    cursor: pointer;
    text-decoration: none;
    color: inherit;
`;


function Navbar() {
    const user = useSelector((state) => state.user.currentUser);
    const dispatch = useDispatch();
    const quantity = useSelector(state => state.cart.quantity)
    const handleLogout = () => {
        // Dispatch the logout action to clear currentUser in Redux state
        dispatch(logout());
        // Remove the user from local storage
        localStorage.removeItem('user');
    };

  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='Search'></Input>
                    <SearchIcon style={{color:"gray", fontSize:16}}></SearchIcon>
                </SearchContainer>
            </Left>
            <Center><Logo>HUY.</Logo></Center>
            <Right>
            {!user ? (
                        <>
                            <Link to='/register'>
                                <MenuItem>REGISTER</MenuItem>
                            </Link>
                            <Link to='/login'>
                                <MenuItem>SIGN IN</MenuItem>
                            </Link>
                        </>
                    ) : (
                        <LogoutLink to="#" onClick={handleLogout}>
                            Logout
                        </LogoutLink>
                    )}
                <Link to='/cart'>
                    <MenuItem>
                    <Badge badgeContent={quantity} color="primary">
                        <ShoppingCartIcon></ShoppingCartIcon>
                    </Badge>
                    </MenuItem>
                </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar