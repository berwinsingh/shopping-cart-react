import { useEffect } from "react";
import PropTypes from 'prop-types';

const GameData = (props)=>{
    const apiKey = "cc4bf61aa0b149e29040c304202d1a55";
    const url = `https://api.rawg.io/api/games?key=${apiKey}`;

    useEffect(()=>{
        const getData = async ()=>{
            const response = await fetch(url);
            const data = await response.json();
        }

        getData();
    },[url])

    return(
        <>
        
        </>
    )
}

GameData.propTypes = {
    
}

export default GameData;