import './App.css';
import Carousel from './components/Carousel';
import Home from './components/Home';
import Navbar from './components/Navbar';
import TextBlock from './components/textBlock';
import Events from './components/Event';
import Club from './components/Club';
import React from 'react'

function App() {
 
  return (
    <div class="App">
      <Navbar/>
       <Home/>
       <div class="inner">
       <TextBlock/>
       <hr></hr>
       <Events/>
       <Carousel/>
       <hr></hr>
       <Club/>
       </div>
      
 </div>
   );
}
export default App;
