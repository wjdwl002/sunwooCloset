import Loading from "@/components/Loading";
import react, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(()=> {
            setIsLoading(false);
        }, 2000)
    }, [])
    
    return (<MainDiv>
    {isLoading? <Loading/>: <div>hi</div>}
    </MainDiv>)
}

export default Home;

const MainDiv = tw.div`
w-full h-full
`