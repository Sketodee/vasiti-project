import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import StoryPage from './components/StoryPage'



function App() {
  return (
   <div>
    <Routes> 
      <Route path='/' element = {<Home />}/>
      <Route path='/story' element = {<StoryPage />}/>
    </Routes>
   </div>
  );
}

export default App;
