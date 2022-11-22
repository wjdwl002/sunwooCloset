/* libraries */
import { useEffect, useState } from "react";
import styled from "styled-components";
/* router */
import AppRouter from "@/components/_router/router";
/* context */
import { useTheme } from "@/context/ThemeContext";
import tw from "tailwind-styled-components";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import { useNavigate } from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(()=> {
        setIsLoading(false);
    }, 2000)
  }, [])

  return (
    <MainDiv>
      <MobileDiv> 
        {isLoading ? <Loading/> : <Header/>}
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
overflow-y-hidden

`

export default App;
