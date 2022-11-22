import react from "react";
import tw from "tailwind-styled-components";
import { IconButton } from "./_styled/Buttons";
import StickLoader from "./_styled/Loading/Stick";

const Loading = () => {

    return (<MainDiv>
        <TitleDiv>
            sunwu's Closet
        </TitleDiv>
        <StickLoader/>
    </MainDiv>)
}

export default Loading

const MainDiv = tw.h1`
w-full h-full
flex justify-center items-center flex-col
bg-primary
`

const TitleDiv = tw.div`
font-bold text-[32px]
my-[60px] text-base-100
`

const LoadingDiv = tw.div`
`

const SpinnerDiv = tw.div`
w-[20px] h-[20px]
my-[20px]
`