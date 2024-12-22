import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons'; // Import tất cả icon
import classNames from 'classnames/bind';
import styles from './CourseList.module.scss';
import courseList from '../../json/courseList.json';

const cx = classNames.bind(styles);

function CourseList() {
    return courseList.names.map((name, index) => {
        let listCourses;
        let isFreeCourses;

        switch (name.id) {
            case 1:
                listCourses = 'paidCourses';
                isFreeCourses = false;
                break;
            case 2:
                listCourses = 'freeCourses';
                isFreeCourses = true;
                break;
            default:
                break;
        }

        return (
            <div key={index} className={cx('course-list')}>
                <div className={cx('course-list__wrapper')}>
                    <div className={cx('course-list__name')}>
                        <div>
                            <a
                                className={cx('course-list__name-wrapper-a')}
                                href={name.url}
                            >
                                {name.courseListName}
                            </a>
                        </div>
                        {isFreeCourses ? (
                            <div className={cx('show-all')}>
                                <a href={name.url}>{name.showAll}</a>
                            </div>
                        ) : null}
                    </div>
                    <div className={cx('course-list__content', 'grid')}>
                        <div
                            className={cx(
                                'course-list__content-wrapper',
                                'row',
                                'sm-gutter'
                            )}
                        >
                            {courseList[listCourses].map((course, index) => {
                                const Icon = Icons[course.icon]; // Lấy icon từ JSON
                                return (
                                    <div
                                        key={index}
                                        className={cx(
                                            'course-item',
                                            'col',
                                            'l-3'
                                        )}
                                    >
                                        <div
                                            className={cx(
                                                'course-item__wrapper'
                                            )}
                                        >
                                            <div
                                                className={cx(
                                                    'course-item__img'
                                                )}
                                            >
                                                <a href={course.url}>
                                                    <img
                                                        src={course.image}
                                                        alt="Course Thumbnail"
                                                    />
                                                </a>
                                            </div>
                                            <div
                                                className={cx(
                                                    'course-item__info'
                                                )}
                                            >
                                                <h3
                                                    className={cx(
                                                        'course-name'
                                                    )}
                                                >
                                                    <a href={course.url}>
                                                        {course.name}
                                                    </a>
                                                </h3>
                                                <div
                                                    className={cx(
                                                        'course-price'
                                                    )}
                                                >
                                                    {isFreeCourses ? (
                                                        <span
                                                            className={cx(
                                                                'course-price__free'
                                                            )}
                                                        >
                                                            {course.price}
                                                        </span>
                                                    ) : (
                                                        <>
                                                            <span
                                                                className={cx(
                                                                    'course-price__old'
                                                                )}
                                                            >
                                                                {
                                                                    course.price
                                                                        .old
                                                                }
                                                            </span>
                                                            <span
                                                                className={cx(
                                                                    'course-price__main'
                                                                )}
                                                            >
                                                                {
                                                                    course.price
                                                                        .main
                                                                }
                                                            </span>
                                                        </>
                                                    )}
                                                </div>
                                                <div
                                                    className={cx(
                                                        'course-footer'
                                                    )}
                                                >
                                                    {isFreeCourses ? (
                                                        <div
                                                            className={cx(
                                                                'course-members'
                                                            )}
                                                        >
                                                            <div
                                                                className={cx(
                                                                    'course-members__icon'
                                                                )}
                                                            >
                                                                <FontAwesomeIcon
                                                                    icon={
                                                                        Icons.faUsers
                                                                    }
                                                                />
                                                            </div>
                                                            <span>
                                                                {course.members}
                                                            </span>
                                                        </div>
                                                    ) : (
                                                        <div
                                                            className={cx(
                                                                'course-author'
                                                            )}
                                                        >
                                                            <div
                                                                className={cx(
                                                                    'course-author__avatar'
                                                                )}
                                                            >
                                                                <img
                                                                    src={
                                                                        course
                                                                            .author
                                                                            .avatar
                                                                    }
                                                                    alt="Author Avatar"
                                                                />
                                                            </div>
                                                            <span>
                                                                {
                                                                    course
                                                                        .author
                                                                        .name
                                                                }
                                                            </span>
                                                        </div>
                                                    )}

                                                    <div
                                                        className={cx(
                                                            'course-time'
                                                        )}
                                                    >
                                                        {Icon && (
                                                            <div
                                                                className={cx(
                                                                    'course-time__icon'
                                                                )}
                                                            >
                                                                <FontAwesomeIcon
                                                                    icon={Icon}
                                                                />
                                                            </div>
                                                        )}
                                                        <span>
                                                            {course.duration}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    });
}

export default CourseList;
