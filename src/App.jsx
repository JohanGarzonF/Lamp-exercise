import { useState } from 'react';
import './App.css'
import Card from './components/Card'
import GlobalLamp from './components/GlobalLamp';
import IndivLamp from './components/IndivLamp';


function App() {
  return (
    <div className="App">
      <IndivLamp/>
      <GlobalLamp/>
    </div>
  )
}

export default App


/* 
    const [isActive, setInsActive] = useState('Active');
  const changeStateUser = () => setInsActive('Inactive');

      <Card 
        name='Johan'
        isActive={isActive}
        changeStateUser={changeStateUser}
      />
      <Card 
        name='Leidy'
        isActive={isActive}
        changeStateUser={changeStateUser}
      />
      <Card 
        name='Hakim'
        isActive={isActive}
        changeStateUser={changeStateUser}
      /> */