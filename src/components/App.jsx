import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Action from "./Action";
import Bollywood from "./Bollywood";
import Categories from "./Categories";
import Home from "./Home";


function App(){

    return (<div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                    <Route path='/New-Releases' element={<Categories />}/ >
                    <Route path='/Categories' element={<Categories />}/>
                    <Route path='/action' element={<Action/>}/>
                    

            </Routes>
        </BrowserRouter>

    </div>);
}

export default App;