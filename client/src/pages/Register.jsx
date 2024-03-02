import styled from "styled-components"
import { mobile } from "../responsive"
import { register } from "../redux/apiCalls"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const Container = styled.div` 
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://images.alphacoders.com/134/1342705.png") center;

    display: flex;
    align-items: center;
    justify-content: center;

`
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: #fff;
    ${mobile ({width: "75%"})}
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`
const Error = styled.span`
  color: red;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`

function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()
  const {isFetching, error} = useSelector((state) => state.user)

  const handleRegister = (e) =>{
    e.preventDefault()
    register(dispatch, {username, password, email})
  }
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder='name'></Input>
          <Input placeholder='last name'></Input>
          <Input placeholder='email' onChange={(e) => setEmail(e.target.value)}></Input>
          <Input placeholder='username' onChange={(e) => setUsername(e.target.value)}></Input>
          <Input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)}></Input>
          <Input type="password" placeholder='confirm password' onChange={(e) => setPassword(e.target.value)}></Input>
          <Agreement>
            By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick = {handleRegister} disabled={isFetching}>CREATE</Button>
          {error && <Error>Something went wrong...</Error>}
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register