import ImgHolder from "@/components/ImageHolder";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import tw from "tailwind-styled-components";

const Closet = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [clothesInfo, setClothesInfo] = useState(null);
    const [recommendedList, setRecommendedList] = useState([]);

    useEffect(()=> {
        const id = location.pathname.split("/")[2];

        axios.get(`http://ec2-3-101-101-80.us-west-1.compute.amazonaws.com:8080/app/${id}`).then((res)=> {
            
        console.log(res.data?.["prev_content"]);
                
            setRecommendedList(res.data?.["User_content"]);
            setClothesInfo(res.data?.["prev_content"]);
            console.log(clothesInfo);
        })
    }, [])

    return <MainDiv>
        <TitleDiv>옷 정보</TitleDiv>
        <FlexDiv>
            <ImgHolder style={{width: "fit-content", margin: "0" }} src={clothesInfo?.["photo:"]} />
        </FlexDiv>

        <TitleDiv className="mt-[30px]">추천 스타일</TitleDiv>
        <PhotoList>
            {recommendedList.map((e, idx)=> <ImgHolder src={e?.photo} key={idx} style={{"margin": "0 10px"}} onClick={()=> navigate(`/recommendation/${location.pathname.split("/")[2]}`)}/>)}
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