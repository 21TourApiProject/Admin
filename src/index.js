import React, {StrictMode} from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import ModalsProvider from './components/modal/ModalsProvider';
import ReactDOM from 'react-dom';
import ReactModal from "react-modal";

ReactModal.setAppElement('#root');

const rootElement = document.getElementById('root');
ReactDOM.render(
    <StrictMode>
        <ModalsProvider>
            <App/>
        </ModalsProvider>
    </StrictMode>,
    rootElement,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
