import React from 'react';
import {
    BrowserRouter,
    Routes as RoutesWrapper,
    Route,
    Navigate
} from 'react-router-dom'

function Rotas(){
    return (
        <BrowserRouter>
        <RoutesWrapper>
          <Route path="/" ></Route>
          
         
        </RoutesWrapper>
      </BrowserRouter>
    )
}

export default Rotas;