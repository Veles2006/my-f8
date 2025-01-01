
import Caroulsel from '../../componets/Carousel';
import CourseList from '../../componets/CourseList';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Sidebar from '../../componets/Sidebar';

const cx = classNames.bind(styles);

function Home() {
    return (
        <>
            <Caroulsel />
            <CourseList />
        </>
    );
}

export default Home;
