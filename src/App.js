
import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  const [mode,setMode]=useState('light');//wheter a dark mode is enable or not
  const [alert,setAlert]=useState(null);
  
  const showAlert=(message ,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been enabled","success");
      document.title="TextUtils-Dark Mode";
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success");
      document.title="TextUtils-Light Mode";
    }
  }
  return (
 
 <>
 <Router>
  <Navbar title="TextUtils" about="About Text" mode={mode}  toggleMode={toggleMode} />
  <Alert alert={alert}/> 
  <div className="container my-3">
  <Switch>
          <Route exact path="/about">
            <About />
          </Route>
         
          <Route path="/">
          <TextForm showAlert={showAlert} heading="Enter Text to Analyze " mode={mode}/>
          </Route> 
    </Switch>         
  </div>
  </Router>
  </>
  
  );
}

export default App;
