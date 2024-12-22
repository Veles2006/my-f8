import classNames from 'classnames/bind';
// import styles from "./App.css"

import './App.css';
import Header from './componets/Header';
import Grid from './componets/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faClock, faHouse, faNewspaper, faRoad } from '@fortawesome/free-solid-svg-icons';
import Caroulsel from './componets/Carousel'
import CourseList from './componets/CourseList';

// const cx = classNames.bind(styles)

function Container() {
    return (
        <div className='container grid wide'>
            <div className='container__wrapper row'>
                <div className='sidebar-wrapper col l-1'>
                    <div className='sidebar'>
                        <ul className='sidebar__navigations'>
                            <li className='sidebar__navigation sidebar__navigation--active'>
                                <a href='/'>
                                    <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
                                    <span>Trang chủ</span>
                                </a>
                            </li>
                            <div className='sidebar__navigation'>
                                <a href='/'>
                                    <FontAwesomeIcon icon={faRoad}></FontAwesomeIcon>
                                    <span>Lộ trình</span>
                                </a>
                            </div>
                            <div className='sidebar__navigation'>
                                <a href='/'>
                                    <FontAwesomeIcon icon={faNewspaper}></FontAwesomeIcon>
                                    <span>Bài viết</span>
                                </a>
                            </div>
                        </ul>
                        <div className='sidebar__notice'>
                            <FontAwesomeIcon icon={faBullhorn}></FontAwesomeIcon>
                        </div>
                    </div>
                </div>
                <div className='container-content col l-11'>
                    {/* <div className='carousel'>
                        <div className='carousel__img'>
                            <div className='carousel__nav-control'></div>
                        </div>
                        <div className='carousel__indicators'></div>
                    </div> */}

                    <Caroulsel />
    
                    <CourseList />

                </div>
            </div>
        </div>
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
