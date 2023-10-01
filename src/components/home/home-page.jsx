import GameData from "../data/fetch-data";
import HighlightGame from "./highlight-card";

const Home = ()=>{
    return(
        <>
            <HighlightGame />
            <GameData />
        </>
    )
}

export default Home;