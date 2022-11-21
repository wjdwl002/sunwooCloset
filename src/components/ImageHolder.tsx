import React from "react";
import tw from "tailwind-styled-components";

const ImgHolder = ({src, onClick}:{src:string; onClick: Function}) => {

    return <Img onClick={onClick} src={src}></Img>
}

export default ImgHolder;

const Img = tw.img`
w-[110px] h-[180px]
rounded-lg
shadow-md
`