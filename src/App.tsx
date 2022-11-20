/* libraries */
import { useEffect, useState } from "react";
import styled from "styled-components";
/* router */
import AppRouter from "@/components/_router/router";
/* context */
import { useTheme } from "@/context/ThemeContext";
import tw from "tailwind-styled-components";

function App() {

  return (
    <MainDiv>
      <MobileDiv> 
        <AppRouter />
      </MobileDiv>
    </MainDiv>
  );
}

const MainDiv = tw.div`
w-full h-full
flex justify-center
bg-white
`;

const MobileDiv = tw.div`
w-1/2 min-w-[400px] max-w-[600px] h-full
bg-[#fffff9] shadow-2xl 

`

export default App;
