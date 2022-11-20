import React from "react";
import tw from "tailwind-styled-components";

const Header = () => {

    return (<MainDiv>
        <h1>Sunwoo's Closet</h1>
    </MainDiv>)
}

export default Header;

const MainDiv = tw.div`
w-full h-[60px]
bg-primary
flex items-center
px-[15px] 
font-bold text-base-100
shadow-xl
`