import styled from "styled-components";
import Logo from "./assets/img/logo.png";

export default function Header(){

    return(
        <>
        <HeaderContainer >
            <ImgLogo src={Logo} alt="logo" />
            <LetraLogo>ZapRecall</LetraLogo>
        </HeaderContainer>
        </>
    )
}

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;
  
`
const ImgLogo = styled.img`
    width: 52px; 
`

const LetraLogo = styled.h1`
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #FFFFFF;
    margin-left: 20px;
`