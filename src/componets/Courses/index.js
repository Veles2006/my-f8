import './Courses.css'

const courses = [
    {
        thumb: 'https://files.fullstack.edu.vn/f8-prod/courses/6.png',
        name: 'Node & ExpressJS',
        time: 'Học cách đây 5 ngày trước',
    },
    {
        thumb: 'https://files.fullstack.edu.vn/f8-prod/courses/13/13.png',
        name: 'Xây Dựng Website với ReactJS',
        time: 'Học cách đây 3 tháng trước',
    },
    {
        thumb: 'https://files.fullstack.edu.vn/f8-prod/courses/14/624faac11d109.png',
        name: 'Làm việc với Terminal & Ubuntu',
        time: 'Học cách đây 5 tháng trước',
    },
    {
        thumb: 'https://files.fullstack.edu.vn/f8-prod/courses/12.png',
        name: 'Lập Trình JavaScript Nâng Cao',
        time: 'Học cách đây 5 tháng trước',
    },
    {
        thumb: 'https://files.fullstack.edu.vn/f8-prod/courses/1.png',
        name: 'Lập Trình JavaScript Cơ Bản',
        time: 'Học cách đây 5 tháng trước',
    }
];

function Courses() {
    const htmls = courses.map((course, index) => (
        <div key={index} className="course">
            <span className="course__wrap-img">
                <img src={course.thumb} className="course-thumb" />
            </span>

            <span className="course__wrap-title">
                <a className="course__name-learned">{course.name}</a>
                <p className="course__time-learned">{course.time}</p>
                <div className="course__elapsed"></div>
            </span>
        </div>
    ));

    return htmls;
}

export default Courses