import { useState } from 'react'
import './App.css';
import Header from './Header'
import Slidebar from './Slidebar'
import HomePage from './HomePage'
import { context } from './GlobalVariable'

function App() {
  const [toggler, setToggler] = useState(false)
  const [width, setWidth] = useState(0)
  window.onresize = screen;
  window.onload = screen;
  function screen(){
    setWidth(window.innerWidth);
  }

  return (
    <context.Provider value={{toggler,setToggler}}>
      <div 
      className='app' 
      style={width>1020 && toggler===false?{gridTemplateColumns:'230px auto'}:width>425?{gridTemplateColumns:'60px auto'}:{gridTemplateColumns:'0px auto'}}
      >
        <Header />
        <Slidebar width={width}/>
        <HomePage width={width}/>
      </div>
    </context.Provider>
  );
}

export default App;
