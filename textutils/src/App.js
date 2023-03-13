// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, {useState} from 'react'
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');  // weather dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(41 41 42 / 90%)';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    {/* <Navbar/> */}
    <Alert alert="This is alert"/>
    <div className="container my-3">
    <TextForm heading="Enter The Text To Analyze Below" mode={mode}/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
