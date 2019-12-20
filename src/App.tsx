
import React from 'react';
import './App.module.css';


import {BrowserRouter} from "react-router-dom";
import Main from "./neko-1-main/main-1-ui/Main";
import store from "./neko-1-main/main-2-bll/store";
import {Provider} from "react-redux";


// add context
const App: React.FC = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Provider store={store}>
                    <Main/>
                </Provider>
            </BrowserRouter>
        </div>
    );
};

export default App;
