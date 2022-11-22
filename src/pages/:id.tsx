import ImgHolder from "@/components/ImageHolder";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import tw from "tailwind-styled-components";

const Closet = () => {
    const location = useLocation();
    const [clothesInfo, setClothesInfo] = useState(null);
    const [recommendedList, setRecommendedList] = useState(Array.from({length: 10}, ()=> {}))

    useEffect(()=> {
        const id = location.pathname.split("/")[2];
        console.log(id);
        
        axios.get(`http://ec2-3-101-101-80.us-west-1.compute.amazonaws.com:8080/app/${id}`).then((res)=> {
            setClothesInfo(res.data?.["prev_content"]);
            setRecommendedList(res.data?.["User_content"]);
        })
    }, [])
    return <MainDiv>
        <TitleDiv>옷 정보</TitleDiv>
        <FlexDiv>
            <Img />
            {clothesInfo?.name | "name"}
        </FlexDiv>

        <TitleDiv className="mt-[30px]">추천 스타일</TitleDiv>
        <PhotoList>
            {recommendedList.map((e)=> <ImgHolder src={e?.photo} style={{"margin": "0 10px"}}/>)}
        </PhotoList>
    </MainDiv>
}

export default Closet;

const MainDiv = tw.div`
w-full
p-[20px]
`

const TitleDiv = tw.div`
py-[10px] text-[18px] font-bold
`

const FlexDiv = tw.div`
flex gap-[10px]
`

const Img = tw.img`
w-[180px] h-[180px]
rounded-lg
shadow-md
`

const PhotoList = tw.div`
w-fit h-[180px]
overflow-x-auto
whitespace-nowrap
`