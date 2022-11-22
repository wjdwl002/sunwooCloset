import React from "react";
import tw from "tailwind-styled-components";

const ImgHolder = ({src, onClick, style}:{src:string; onClick: Function; style: Object}) => {

    return <Img onClick={onClick} src={src} style={style}></Img>
}

export default ImgHolder;

const Img = tw.img`
inline-block
w-[110px] h-[180px]
rounded-lg
shadow-md
m-auto
`