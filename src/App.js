import classNames from 'classnames/bind';
// import styles from "./App.css"

import './App.css';
import Header from './componets/Header';
import Grid from './componets/Grid';

// const cx = classNames.bind(styles)

function Container() {
    return (
        <div className='container'></div>
    )
}

function App() {
    return (
        <Grid>
            <div className="App">
                {Header()}
                {Container()}
            </div>
        </Grid>
    )
}

export default App;
