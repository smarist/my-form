import React from 'react';
import './App.css';
import ImageUploader from './components/ImageUploader';

function App() {
  return (
    <div className="App">
      <ImageUploader onSelectImage={(e) => console.log(e)}/>
    </div>
  );
}

export default App;
