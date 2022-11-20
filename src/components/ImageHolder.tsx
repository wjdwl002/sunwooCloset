import React from "react";
import tw from "tailwind-styled-components";

const ImgHolder = ({src}:{src:string}) => {

    return <Img src={src}></Img>
}

export default ImgHolder;

const Img = tw.img`
w-[110px] h-[180px]
rounded-lg
shadow-md
`