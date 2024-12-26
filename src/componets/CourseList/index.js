import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './CourseList.module.scss';
import courseList from '../../json/courseList.json';

const cx = classNames.bind(styles);

const getListName = (id) => {
    const listMapping = {
        1: 'paidCourses',
        2: 'freeCourses',
        3: 'postsList',
        4: 'videosList'
    };
    return listMapping[id] || '';
};

const CourseItem = ({ course, listNames, showAll }) => {
    const Icon = Icons[course.icon];

    return (
        <div className={cx('course-item', 'col', 'l-3')}>
            <div className={cx('course-item__wrapper')}>
                <div className={cx('course-item__img')}>
                    <a href={course.url}>
                        <img src={course.image} alt="Course Thumbnail" />
                        {listNames === 'videosList' ? (
                            <div className={cx('video-info')}>
                                <div className={cx('video-play-wrapper')}>
                                    <FontAwesomeIcon icon={Icons.faPlay}></FontAwesomeIcon>
                                </div>
                                <div className={cx('video-duration')}>
                                    <span>{course.duration}</span>
                                </div>
                            </div>
                        ): null}
                    </a>
                </div>
                <div className={cx('course-item__info')}>
                    <h3 className={cx('course-name')}>
                        <a href={course.url}>{course.name}</a>
                    </h3>

                    {course.price && (
                        <div className={cx('course-price')}>
                            {showAll ? (
                                <span className={cx('course-price__free')}>
                                    {course.price}
                                </span>
                            ) : (
                                <>
                                    <span className={cx('course-price__old')}>
                                        {course.price.old}
                                    </span>
                                    <span className={cx('course-price__main')}>
                                        {course.price.main}
                                    </span>
                                </>
                            )}
                        </div>
                    )}

                    <div className={cx('course-footer')}>
                        {listNames !== 'postsList' &&
                            (showAll ? (
                                <div className={cx('course-members')}>
                                    <FontAwesomeIcon
                                        icon={listNames !== 'videosList' ? Icons.faUsers : Icons.faComment}
                                        className={cx('course-members__icon')}
                                    />
                                    <span>{course.members}</span>
                                </div>
                            ) : (
                                <div className={cx('course-author')}>
                                    <div
                                        className={cx('course-author__avatar')}
                                    >
                                        <img
                                            src={course.author.avatar}
                                            alt="Author Avatar"
                                        />
                                    </div>
                                    <span>{course.author.name}</span>
                                </div>
                            ))}

                        <div className={cx('course-time')}>
                            {Icon && (
                                <FontAwesomeIcon
                                    icon={Icon}
                                    className={cx('course-time__icon')}
                                />
                            )}
                            <span
                                style={{
                                    marginLeft:
                                        listNames === 'postsList' ? 0 : '6px',
                                }}
                            >
                                {listNames !== 'videosList' ? course.duration : course.comments}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

function CourseList() {
    return (
        <div className={cx('wrapper')}>
            {courseList.names.map((name) => {
                const listNames = getListName(name.id);
                const courses = courseList[listNames] || [];

                return (
                    <div key={name.id} className={cx('course-list')}>
                        <div className={cx('course-list__wrapper')}>
                            <div className={cx('course-list__name')}>
                                <a
                                    className={cx(
                                        'course-list__name-wrapper-a'
                                    )}
                                    href={name.url}
                                >
                                    {name.title}
                                </a>
                                {name.showAll && (
                                    <div className={cx('show-all')}>
                                        <a href={name.url}>{name.showAll}</a>
                                    </div>
                                )}
                            </div>

                            <div className={cx('course-list__content', 'grid')}>
                                <div
                                    className={cx(
                                        'course-list__content-wrapper',
                                        'row',
                                        'sm-gutter'
                                    )}
                                >
                                    {courses.map((course) => (
                                        <CourseItem
                                            key={course.id || course.name}
                                            course={course}
                                            listNames={listNames}
                                            showAll={name.showAll}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default CourseList;
