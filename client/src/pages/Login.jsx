import styled from "styled-components"
import { mobile } from "../responsive"
import { useState } from "react"
import { login } from "../redux/apiCalls"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";

const Container = styled.div` 
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://images.unsplash.com/photo-1625237454823-da3f7461a353?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGd1bmRhbXxlbnwwfHwwfHx8MA%3D%3D") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

`
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: #fff;
    ${mobile ({width: "75%"})}
`
const Form = styled.form`
    display: flex;
    flex-direction:column;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    &:disabled{
      color: green;
      cursor: not-allowed;
    }
`

const Error = styled.span`
  color: red;
`

const StyledLink = styled(Link)`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`


function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const {isFetching, error} = useSelector((state) => state.user)

  const handleLogin = (e) =>{
    e.preventDefault()
    login(dispatch, {username, password}) // Call the login function with username and password
  }

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder='username' onChange={(e) => setUsername(e.target.value)}></Input>
          <Input placeholder='password' onChange={(e) => setPassword(e.target.value)} type="password"></Input> {/* Added type="password" */}
          <Button onClick={handleLogin} disabled={isFetching}>LOGIN</Button> {/* Bound handleLogin to onClick event */}
          {error && <Error>Something went wrong...</Error>}
          <StyledLink to='/forgot-password'>FORGOT PASSWORD?</StyledLink> {/* Changed from <StyledLink> to <Link> */}
          <StyledLink to='/register'>CREATE A NEW ACCOUNT</StyledLink> {/* Changed from <StyledLink> to <Link> */}
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
