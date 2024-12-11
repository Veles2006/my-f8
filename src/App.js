import classNames from 'classnames/bind';
// import styles from "./App.css"

import './App.css';
import Header from './componets/Header';

// const cx = classNames.bind(styles)

function App() {
    return <div className="App">{Header()}</div>;
}

export default App;
