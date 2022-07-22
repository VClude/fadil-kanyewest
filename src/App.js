import React from 'react';

import './App.css';

import Quote from './component/quote'
import MyQuote from './component/myquote'


function App() {
  return (
    <div className="App">
      <main>
      <div className="Api-site" align="left"><a href="https://kanye.rest">API SITE</a></div>
      <Quote />
      <MyQuote />
    </main>
   
    </div>
  );
}

export default App;
