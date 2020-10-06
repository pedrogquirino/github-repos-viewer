import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import GitRepository from './GitRepositories';


function App() {
  return (
    <div className="App">  

      <div className="App-header">
        Github repository
      </div>
      
      <GitRepository />    
    </div>
  );
}

export default App;
