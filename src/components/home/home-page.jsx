import GameData from "../data/fetch-data";
import Navbar from "../navigation/navbar";
import HighlightGame from "./highlight-card";

const Home = ()=>{
    return(
        <>
            <Navbar />
            <HighlightGame />
            <GameData />
        </>
    )
}

export default Home;