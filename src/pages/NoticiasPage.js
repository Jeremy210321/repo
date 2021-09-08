import React,{useState,useEffect} from 'react';
import "../styles/App.css"

function NoticiasPage(props) {
    const [noticias, setNoticias] = useState();
    useEffect( () => {
        fetch("../files/news.json")
            .then(response => response.json())
            .then(datos => {
                setNoticias(datos)
            })
    } ,[]);

    return (
        <div>Noticias</div>
    );
}

export default NoticiasPage;