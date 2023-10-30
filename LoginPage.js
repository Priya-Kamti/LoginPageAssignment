import styled from "styled-components";
import { facebook, istagram, twitter } from "react-icons";
import Input from "./components/input";
import Button from "./components/button";
import Icon from "./components/icon";

const LoginStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 50vh;
  background-color: rgb(22, 27, 107, 0.25);
  box-shadow: 0 0px 5px 0px black;
  backdrop-filter: blur(2.5px);
  border-radius: 10px;
  color: white;
  letter-spacing: 0.1rem;

  @media only screen and (max-width:320px){
    width:80vw;
    height:90vh;
    hr{
      margin-bottom:0.3rem;
    }
    h4{
       font-size:small;
    }
  }

  @media only screen and (max-width:360px){
    width:60vw;
    height:90vh;
    font-size:20px;
    hr{
      margin-bottom:0.3rem;
    }
    
  }
  @media only screen and (max-width:414px){
    width:80vw;
    height:80vh;
    font-size:23px;
    hr{
      margin-bottom:1rem;
    }
  }
  @media only screen and (max-width:82px){
    width:80vw;
    height:80vh;
    font-size:30px;
    hr{
      margin-bottom:1rem;
    }
    h4{
      font-size:90px
    }
  }
`;

const Heading = styled.h2`
  margin: 2rem 0 2rem 0;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-conent: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;
const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
 
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const LoginWith = styled.h5`
  cursor:pointer;

`;
const HorizontalRule = styled.hr`
width:90%;
height:0.2rem;
margin: 2rem 1rem;
border:none;
background: linear-gradient(to right , blue 0% , #03213b 69%);
backdrop-filter:blur(25px);
`;



const ForgotPassword = styled.h4`
  cursor:pointer;
  color:rgb(209, 205, 205);
  margin-top:1rem;
`;

const LoginPage = () => {

  const Facebook = "linear-gradiants(to right , blue, blue )"

  return (
    <LoginStyle>
      <Heading>WELCOME</Heading>
      <InputContainer>
      <Input type={"text"} placeholder={"Email"}></Input>
        <Input type={"password"} placeholder={"Password"}></Input>
        </InputContainer>
        
        <ButtonContainer>
          <Button />
        </ButtonContainer>
        <LoginWith>or Login With</LoginWith>
        <HorizontalRule/>

        <ForgotPassword>Forgot Password ?</ForgotPassword>
    </LoginStyle>
  );
};

export default LoginPage;
