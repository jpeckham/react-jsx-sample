// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import LocalizedStrings from 'react-localization';
 
let strings = new LocalizedStrings({
 xx:{
     helloWorld: "ERR: No translation!"
 },
 en:{
   helloWorld: "Hello World!"
 },
 es: {
   helloWorld: "Hola Mundo!"
 }
});
// create a react component
const App = () =>{
    return (
        <div>
            <p>{strings.helloWorld}</p>
            <label htmlFor="name" className="label">Enter name:</label>
            <input id="name" type="text" className="textbox"/>
            <button style={{backgroundColor: 'blue',color: 'white'}}>Submit</button>
        </div>
    );
};
// take the react component and show it on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);