import React from 'react';
import ReactDOM from 'react-dom';
import { CameraFeed } from './components/camera-feed/camera';
import './App.css';

const uploadImage = async file => {
    const formData = new FormData();
    formData.append('file', file);
};

function App() {
    return (
        <div className="App">
            <CameraFeed sendFile={uploadImage} />
        </div>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

export default App;