import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import tw from "tailwind-styled-components";
import ImgHolder from "./ImageHolder";

const MyCloset = () => {
    const [clothesList, setClothesList] = useState(Array.from({length: 10}, ()=> {}));
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://ec2-3-101-101-80.us-west-1.compute.amazonaws.com:8080/app").then((res)=> {
            setClothesList(res.data["User_content"])
            
        })
    }, [])
    
    return (<MainDiv>
        <TitleDiv>My Closet</TitleDiv>
        <ClosetDiv>
            {clothesList.map((e, idx)=> 
            <ImgHolder 
                src={e?.photo | ""} 
                onClick={()=> {navigate(`/closet/${e?.idx}`)}}
                key={idx}
            />)}
        </ClosetDiv>
    </MainDiv>)
}

export default MyCloset

const MainDiv = tw.div`
w-full h-[calc(100%-128px)]
px-[20px] pb-[20px]
overflow-y-auto
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

const Img = tw.img`
w-[110px] h-[180px]
rounded-lg
shadow-md
`