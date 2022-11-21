import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import tw from "tailwind-styled-components";

const Closet = () => {
    const location = useLocation();
    const [clothesInfo, setClothesInfo] = useState(null);

    useEffect(()=> {
        const id = location.pathname.split("/")[2];
        console.log(id);
        
        axios.get(`http://ec2-3-101-101-80.us-west-1.compute.amazonaws.com:8000/app/${id}`).then((res)=> {
            setClothesInfo(res.data)
        })
    }, [])
    return <MainDiv>
        <TitleDiv>옷 정보</TitleDiv>
        <Img />
    </MainDiv>
}

export default Closet;

const MainDiv = tw.div`
w-full
p-[20px]
`

const TitleDiv = tw.div`
py-[10px] text-[16px] font-bold
`


const Img = tw.img`
w-[180px] h-[180px]
rounded-lg
shadow-md
`