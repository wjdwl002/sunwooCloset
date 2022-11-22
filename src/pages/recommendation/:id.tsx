import ImgHolder from "@/components/ImageHolder";
import { recommendedStyleList } from "@/store/style";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import tw from "tailwind-styled-components";

const Recommendation = ({data}:{data:Object;}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [clothesInfo, setClothesInfo] = useState(null);
    const [styleList] = useRecoilState(recommendedStyleList);

    useEffect(()=> {
        const id = location.pathname.split("/")[2];
        console.log(styleList);
        
        setClothesInfo(styleList[id]);
    }, [])
    return <MainDiv>
        <TitleDiv className="mt-[30px]">추천 스타일</TitleDiv>
        <ImgHolder style={{"width": "90%", "height": "60%", "margin": "0"}} src={clothesInfo?.photo}/>
        <button style={{marginTop: "20px"}}className="btn">
            <a href={clothesInfo?.idx}>사이트 바로가기
                </a></button>
    </MainDiv>
}

export default Recommendation;

const MainDiv = tw.div`
w-full h-full 
p-[20px]
flex flex-col justify-start items-center
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