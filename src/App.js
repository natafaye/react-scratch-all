import React from 'react';
import logo from './logo.svg';
import './App.css';

function Message(props) {
  return (
    <div className="bg-primary text-white p-3">
      { props.messageToShow }
    </div>
  )
}

function App() {

  const name = "Natalie"

  const paragraph = <p>fdsfds { 5 + 3 }</p>

  return (
    <>
      <p></p>
      <div className="container">
        <div className="row">
          <div className="col-3">
            { name }
            { paragraph }
            <Message messageToShow="Hi there!" />
            <Message messageToShow="How are you?" />
            <Message messageToShow="Goodbye!" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
