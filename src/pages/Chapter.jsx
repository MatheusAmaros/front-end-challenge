import React from "react";
import { useParams } from "react-router-dom";
import {useState} from 'react';

import Api from '../Api';
import '../styles/Chapter.scss';
import Back from "../assets/back.png";

export default function Chapter(){
    let { book } = useParams();
    let { chapter } = useParams();
    const [ Verses, setVerses ] = useState('');
    React.useEffect(() => {
        Api.get(`verses/nvi/${book}/${chapter}`).then((response) => {
        setVerses(response.data.verses);
        console.log(Verses[0]);
        });
    }, []);
        
    return(
        <div className="Chapter">
          <a href="javascript:history.back()"><img src={Back} alt="voltar" /></a>
            <div className="Verses">
            {(() => {
                  var verse = [];
                  for (let i = 0; i < Verses.length; i++) {
 
                    verse.push(<p><aside>{Verses[i].number}</aside>{Verses[i].text}</p>);
                    
                  }
                  return (verse);
                })()}
                
                </div>
        </div> 
     );
}