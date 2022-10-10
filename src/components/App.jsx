import React from "react";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import movies from "./MoviesList/MoviesList"
import Cards from "./Cards/Cards";

function renderCard(val){
    return (
    <Cards
    name={val.name}
    img={val.img}
     />
    );

}


function App(){

    return (<div>
        <Header />
        <Navbar />
        {movies.map(renderCard)}

    </div>);
}

export default App;