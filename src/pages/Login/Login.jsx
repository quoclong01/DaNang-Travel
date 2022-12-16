import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import validator from 'validator';
import axios from 'axios'
import { toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { api } from '../../API/api';


export default function Login() {
  const [signIn, toggle] = React.useState(true);
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `home`;
    navigate(path);
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [username, setUsername] = useState('');
  const [logintext, setLogintext] = useState('');
  const [loginpassword, setLoginpassword] = useState('');

    async function onLogin(e){
        e.preventDefault();
        if(logintext === "" || loginpassword === ""){
            console.log("error")
            toast.error('please fill all the fields')
        }
        else{
            if(validator.isEmail(logintext)) {
                let data = {
                    "email":logintext,
                    "password":loginpassword
                }
                console.log("email")
                axios.post(api + "api/login", data,
                    {
                        headers:{
                            "Content-Type" : "application/json",
                            "Accept" : "application/json"
                        }
                    }
                ).then(res => {
                    console.log(res.data)
                    localStorage.setItem('user-info', JSON.stringify(res.data))
                    toast.success('Login successfully!')
                    routeChange()
                }).catch(error => {
                    console.log(error)
                    toast.error('wrong password or username or email!')
                })
            } else {
                console.log("username")
                let data = {
                    "username":logintext,
                    "password":loginpassword
                }
                console.log(data)
                axios.post(api + "api/login", data,
                    {
                        headers:{
                            "Content-Type" : "application/json",
                            "Accept" : "application/json"
                        }
                    }
                ).then(res => {
                    console.log(res.data)
                    localStorage.setItem('user-info', JSON.stringify(res.data))
                    toast.success('Login successfully!')
                    routeChange()
                }).catch(error => {
                    console.log(error)
                    toast.error('wrong password or username or email!')
                })
            }
        }
    }
  
  
    async function onSignin(e){
        e.preventDefault();
        if(username === "" || password === "" || password2 === "" || email === "" || name === ""){
            console.log("error")
            toast.error('please fill all the fields')
        }
        else if ( password !== password2){
            console.log("error")
            toast.error('the password and confirm password must be the same.')
        }
        else{
            console.log("signin")
            let data = {
                "name":name,
                "username":username,
                "email":email,
                "password":password,
            }

            axios.post(api + "api/register", data,
                {
                    headers:{
                        "Content-Type" : "application/json",
                        "Accept" : "application/json"
                    }
                }
            ).then(res => {
                console.log(res.data)
                toast.success('register successfully!')
            }).catch(error => {
                console.log(error)
                toast.error('register failed!')
            })
        }
    }
  
  return (
    <Content>
      <Container>
        <SignUpContainer signinIn={signIn}>
          <Form>
            <Title>Create Account</Title>
            <Input
              type="text"
              placeholder="UserName"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <Input
              type="text"
              placeholder="Real Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Input
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => {
                setPassword2(e.target.value);
              }}
            />
            <Button
              onClick={(e) => {
                onSignin(e);
              }}
            >
              Sign Up
            </Button>
          </Form>
        </SignUpContainer>

        <SignInContainer signinIn={signIn}>
          <Form>
            <Title>Sign in</Title>
            <Input
              type="text"
              placeholder="Email or Username"
              onChange={(e) => {
                setLogintext(e.target.value);
              }}
            />
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setLoginpassword(e.target.value);
              }}
            />
            <Anchor href="#">Forgot your password?</Anchor>
            <Button
              onClick={(e) => {
                onLogin(e);
              }}
            >
              Sign In
            </Button>
          </Form>
        </SignInContainer>

        <OverlayContainer signinIn={signIn}>
          <Overlay signinIn={signIn}>
            <LeftOverlayPanel signinIn={signIn}>
              <Title>Hello, Friend!</Title>
              <Paragraph>
                Let's start your journey in <br />
                Da Nang
              </Paragraph>
              <GhostButton onClick={() => toggle(true)}>Sign In</GhostButton>
            </LeftOverlayPanel>

            <RightOverlayPanel signinIn={signIn}>
              <Title>Welcome Back!</Title>
              <Paragraph>
                Enter Your personal details and explore more with us
              </Paragraph>
              <GhostButton onClick={() => toggle(false)}>Sigin Up</GhostButton>
            </RightOverlayPanel>
          </Overlay>
        </OverlayContainer>
      </Container>
    </Content>
  );
}

export const Content = styled.div`
  background-color: #d6e4e5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  height: 100vh;
`;

export const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 678px;
  max-width: 100%;
  min-height: 400px;
`;

export const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  ${(props) =>
    props.signinIn !== true
      ? `
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  `
      : null}
`;

export const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  ${(props) =>
    props.signinIn !== true ? `transform: translateX(100%);` : null}
`;

export const Form = styled.form`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;

export const Title = styled.h1`
  font-weight: bold;
  margin: 0;
`;

export const Input = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`;

export const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #38d39f;
  background-color: #38d39f;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;
export const GhostButton = styled(Button)`
  background-color: transparent;
  border-color: #ffffff;
`;

export const Anchor = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`;
export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${(props) =>
    props.signinIn !== true ? `transform: translateX(-100%);` : null}
`;

export const Overlay = styled.div`
  background: #ff416c;
  background: -webkit-linear-gradient(to right, #38d39f, #4ccf94);
  background: linear-gradient(to right, #38d39f, #4ccf94);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${(props) => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
`;

export const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${(props) => (props.signinIn !== true ? `transform: translateX(0);` : null)}
`;

export const RightOverlayPanel = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
  ${(props) => (props.signinIn !== true ? `transform: translateX(20%);` : null)}
`;

export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;
