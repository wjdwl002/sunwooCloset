import React from "react";
import tw from "tailwind-styled-components";
import ImgHolder from "./ImageHolder";

const MyCloset = () => {

    return (<MainDiv>
        <TitleDiv>My Closet</TitleDiv>
        <ClosetDiv>
            <ImgHolder/>
            <ImgHolder/>
            <ImgHolder/>
            <ImgHolder/>
            <ImgHolder/>
            <ImgHolder/>
        </ClosetDiv>
    </MainDiv>)
}

export default MyCloset

const MainDiv = tw.div`
w-full h-[500px]
px-[20px]
font-bold
`

const TitleDiv = tw.div`
py-[10px] text-[16px]
`

const ClosetDiv = tw.div`
h-full
rounded-lg
flex flex-row flex-wrap justify-between content-start gap-[15px]
`