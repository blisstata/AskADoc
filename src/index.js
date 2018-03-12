import React from 'react';
import ReactDOM from 'react-dom';
import AskADoc from './Components/AskADoc';


function App() {
    return (
        <div>
            <AskADoc/>
        </div>
    );
}


ReactDOM.render(<App/>,document.querySelector(".container"));
