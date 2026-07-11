// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
import Nabvar from './Component/Nabvar.jsx';
import News from './Component/News.jsx';
import React, {useState}  from 'react'
import LoadingBar from "react-top-loading-bar";


// import React from "react";
import {BrowserRouter as Router,Routes,Route
} from "react-router-dom";

const  App = ()=> {
 
  const  pageSize = 5;
  const apiKey = import.meta.env.VITE_NEWS_API;
  
  const [progress, setProgress] = useState(0)


    return (
     <div>
  <Router>
    <h3>Hello World</h3>

    <Nabvar />
       <LoadingBar
       height={3}
        color="#f11946"
        progress ={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
    <Routes>
      
      <Route exact
        path="/"
        element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general" />}
      />

      <Route exact
        path="/business"
        element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="us" category="business" />}
      />

      <Route exact
        path="/entertainment"
        element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="us" category="entertainment" />}
      />

      <Route exact
        path="/health"
        element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="us" category="health" />}
      />

      <Route exact
        path="/science"
        element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="us" category="science" />}
      />

      <Route exact
        path="/sports"
        element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="us" category="sports" />}
      />

      <Route exact
        path="/technology"
        element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="us" category="technology" />}
      />
      <Route exact
        path="/general"
        element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general" />}
      />
    </Routes>
  </Router>
</div>
    )
 
}

export default App;


