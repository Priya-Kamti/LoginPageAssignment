import styled from "styled-components";


const ButtonStyle= styled.button`

background: linear-gradient(to right , #14163c 0% , #03217b 79%);
text-transform: uppercase;
letter-spacing: 0.2rem;
width: 70%;
height:3rem;
border-radius:2rem ;
border: none;
cursor:pointer;
color:white;
`

export default function Button(){
    return(
        
            <ButtonStyle>Sign In</ButtonStyle>
        
    )
}




