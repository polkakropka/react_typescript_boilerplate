import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import HelloWorld from "./components/HelloWorld/HelloWorld";

ReactDOM.render(
   <React.StrictMode>
          <HelloWorld />
   </React.StrictMode>,
   document.getElementById('root')
);
