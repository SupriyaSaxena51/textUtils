import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [btnColor, setBtnColor] = useState("custom");
  const [mystyle, setStyle] = useState({
    backgroundColor : 'White',
    color: 'Black'
  });

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", 'success');
      setBtnColor("custom");
      setStyle({
        backgroundColor : 'White',
        color: 'Black'
      });
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#142031';
      showAlert("Dark Mode has been enabled", 'success');
      setBtnColor("custom");
      setStyle({
        backgroundColor : '#253c5d',
        color: 'White'
      });
    }
  }
  const setColorPallete = (color) => {
    if (mode === 'dark') {
      if (color === 'black') {
        document.body.style.backgroundColor = '#32302f';
        setStyle({
          backgroundColor : '#32302f',
          color: 'White'
        });
        setBtnColor("custom");
      }
    } else {
      if (color === 'black') {
        document.body.style.backgroundColor = '#c8c5c5';
        setStyle({
          backgroundColor : '#c8c5c5',
          color: 'black'
        });
        setBtnColor("custom");
      }
    }
  }
  return (
    <>
      <BrowserRouter>
      <Navbar title="Textify" aboutText="About" mode={mode} toggleMode={toggleMode} setColorPallete={setColorPallete}></Navbar>
      <Alert alert={alert} />
      <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mystyle={mystyle} mode={mode}/>} />
            <Route exact path="/" element={<TextForm heading="Enter the text to analyse" showAlert={showAlert} mode={mode} btnColor={btnColor} mystyle={mystyle} />} />
          </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
