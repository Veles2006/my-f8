import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './componets/Header';
import Container from './componets/Container';
import Footer from './componets/Footer';
import Grid from './componets/Grid';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import LearningPaths from './pages/LearningPaths'
import Blog from './pages/Blog'

// const cx = classNames.bind(styles)

function App() {
    useEffect(() => {
        document.title = 'My F8 - Học Lập Trình Để Đi Làm'; // Thay đổi tiêu đề ở đây
    }, []); // [] làm cho hiệu ứng này chỉ chạy một lần khi component được render lần đầu

    return (
        <Grid>
            <Router>
                <Routes>
                    {/* Routes nằm trong Layout */}
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Home />} /> {/* Trang Home */}
                        <Route path='learning-paths' element={<LearningPaths />} /> {/* Trang Home */}
                        <Route path='blog' element={<Blog />} /> {/* Trang Home */}
                    </Route>
                </Routes>
            </Router>
        </Grid>
    );
}

export default App;
