import Api from '../Api'
import '../styles/Book.scss'
import Back from '../assets/back.png'

import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {useState} from 'react';


export default function Book(  ){
    const navigate = useNavigate();
    let { book } = useParams();
    let { chapter } = useParams();
    const [ Information, setInformation ] = useState('');

    React.useEffect(() => {
        Api.get(`books/${book}`).then((response) => {
        setInformation(response.data) 
        });
    }, []);

    return(
        <div className="ChaptersList">
            <a href="javascript:history.back()"><img src={Back} alt="voltar" /></a>
            <div className="Chapters">
             {(() => {
                  var chapters = [];
                  for (let i = 1; i <= Information.chapters; i++) {

                    chapters.push(<button onClick={() => navigate(`/book/${book = Information.abbrev.pt}/${chapter = i}`)}>{i}</button>);
                    
                  }
                  return (chapters);
                })()}
            </div>
        </div>
    );
}