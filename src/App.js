import logo from './logo.svg';
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
  const [btnColor, setBtnColor] = useState("primary");
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
      // document.getElementById('myBox').style.backgroundColor = 'White';
      // document.getElementById('myBox').style.color = 'Black';
      showAlert("Light Mode has been enabled", 'success');
      setBtnColor("primary");
      setStyle({
        backgroundColor : 'White',
        color: 'Black'
      });
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#142031';
      // document.getElementById('myBox').style.backgroundColor = '#2f2d2d';
      // document.getElementById('myBox').style.backgroundColor = '#142031';
      // document.getElementById('myBox').style.color = 'White';
      showAlert("Dark Mode has been enabled", 'success');
      setBtnColor("primary");
      setStyle({
        backgroundColor : '#253c5d',
        color: 'White'
      });
    }
  }
  const setColorPallete = (color) => {
    if (mode === 'dark') {
      if (color === 'green') {
        document.body.style.backgroundColor = '#073703';
        // document.getElementById('myBox').style.backgroundColor = '#073703';
        // document.getElementById('myBox').style.color = 'White';
        setStyle({
          backgroundColor : '#073703',
          color: 'White'
        });
        setBtnColor("success");
      } else if (color === 'purple') {
        document.body.style.backgroundColor = '#300143';
        // document.getElementById('myBox').style.backgroundColor = '#300143';
        // document.getElementById('myBox').style.color = 'White';
        setStyle({
          backgroundColor : '#300143',
          color: 'White'
        });
        setBtnColor("custom");
      } else if (color === 'red') {
        document.body.style.backgroundColor = '#8f150d';
        // document.getElementById('myBox').style.backgroundColor = '#8f150d';
        // document.getElementById('myBox').style.color = 'White';
        setStyle({
          backgroundColor : '#8f150d',
          color: 'White'
        });
        setBtnColor("danger");
      } else if (color === 'black') {
        document.body.style.backgroundColor = '#32302f';
        // document.getElementById('myBox').style.backgroundColor = '#32302f';
        // document.getElementById('myBox').style.color = 'White';
        setStyle({
          backgroundColor : '#32302f',
          color: 'White'
        });
        setBtnColor("secondary");
      } else if (color === 'yellow') {
        document.body.style.backgroundColor = '#828209';
        // document.getElementById('myBox').style.backgroundColor = '#828209';
        // document.getElementById('myBox').style.color = 'White';
        setStyle({
          backgroundColor : '#828209',
          color: 'White'
        });
        setBtnColor("warning");
      }
    } else {
      if (color === 'green') {
        document.body.style.backgroundColor = '#e0facb ';
        // document.getElementById('myBox').style.backgroundColor = '#e0facb ';
        // document.getElementById('myBox').style.color = 'black';
        setStyle({
          backgroundColor : '#e0facb',
          color: 'black'
        });
        setBtnColor("success");
      } else if (color === 'purple') {
        document.body.style.backgroundColor = '#e6c7f1';
        // document.getElementById('myBox').style.backgroundColor = '#e6c7f1';
        // document.getElementById('myBox').style.color = 'White';
        setStyle({
          backgroundColor : '#e6c7f1',
          color: 'black'
        });
        setBtnColor("custom");
      } else if (color === 'red') {
        document.body.style.backgroundColor = '#f79286';
        // document.getElementById('myBox').style.backgroundColor = '#f79286';
        // document.getElementById('myBox').style.color = 'White';
        setStyle({
          backgroundColor : '#f79286',
          color: 'black'
        });
        setBtnColor("danger");
      } else if (color === 'black') {
        document.body.style.backgroundColor = '#c8c5c5';
        // document.getElementById('myBox').style.backgroundColor = '#c8c5c5';
        // document.getElementById('myBox').style.color = 'White';
        setStyle({
          backgroundColor : '#c8c5c5',
          color: 'black'
        });
        setBtnColor("secondary");
      } else if (color === 'yellow') {
        document.body.style.backgroundColor = '#f5f4b4';
        // document.getElementById('myBox').style.backgroundColor = '#f5f4b4';
        // document.getElementById('myBox').style.color = 'White';
        setStyle({
          backgroundColor : '#f5f4b4',
          color: 'black'
        });
        setBtnColor("warning");
      }
    }
  }
  return (
    <>
      <BrowserRouter>
      <Navbar title="DemoApp" aboutText="About" mode={mode} toggleMode={toggleMode} setColorPallete={setColorPallete}></Navbar>
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
