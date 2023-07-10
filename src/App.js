import './App.css';
import React, { useState } from 'react';

function App() {

  const [page1, setPage1] = useState(false);
  const [page2, setPage2] = useState(false);
  const [page3, setPage3] = useState(false);
  
  function showPage1() {
    setPage1(true);
    setPage2(false);
    setPage3(false);
  }

  function showPage2() {
    setPage1(false);
    setPage2(true);
    setPage3(false);
  }

  function showPage3() {
    setPage1(false);
    setPage2(false);
    setPage3(true);
  }



  return (
    <div className="App">
      <div className="container">
        <div className="Title">
          <h2>Dashboard for ML Assignment</h2>
        </div>
        <div className="Content">
          <div className="Button_Row">
            <button className="Button" onClick="showPage1" >Q1(d)</button>
            <button className="Button">Q4(a)</button>
            <button className="Button">Q6</button>
          </div>
          {/* the three pages */}
          <div className="Page">
            <div className="Page1">
            </div>
            <div className="Page2">
            </div>
            <div className="Page3">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;