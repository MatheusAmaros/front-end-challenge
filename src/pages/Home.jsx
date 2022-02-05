import Api from '../Api'
import '../styles/Home.scss';

import React from "react";
import {useState} from 'react';
import { useNavigate, useParams } from "react-router-dom";


export default function Home(){
    let { book } = useParams();
    const navigate = useNavigate();
    const [Biblia, setBiblia] = useState([]);
  
    React.useEffect(() => {
        Api.get("books").then((response) => {
        setBiblia(response.data) 
        console.log(Biblia[1])
        });
    }, []); 
      
    return (
      <div className="Books">
          <div className="BooksName">
            
            {Biblia.map(b => (
                                     
            <h1 className={b.testament} onClick={() => navigate(`/book/${book = b.abbrev.pt}`)}>
              {b.name}
              
              <p>Autor: {b.author} | Capítulos: {b.chapters}</p>
              
            </h1>
            
          ))}
          </div>
      </div>
       
    );
}