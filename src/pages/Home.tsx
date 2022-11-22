import Header from "@/components/Header";
import Loading from "@/components/Loading";
import MyCloset from "@/components/MyCloset";
import InputBox from "@/components/_styled/Input";
import axios from "axios";
import react, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";

const Home = () => {
    const [input, setInput] = useState("");

    return (<MainDiv>
        <Input type="text" placeholder="원하는 스타일을 검색하세요" />
        <MyCloset/>
    </MainDiv>)
}

export default Home;

const MainDiv = tw.div`
w-full h-full
flex flex-col items-center
`

const Input = tw.input`
input w-full max-w-xs
bg-[#fffff9]
drop-shadow
my-[20px]
text-xs
`