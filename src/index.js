import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

// React Bootstarp Configuration
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import CryptoContext from './CryptoContext';
import  "react-alice-carousel/lib/alice-carousel.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CryptoContext><App /></CryptoContext>);
