import './Messages.css'

const messages = [
    {
        avatar: 'https://files.fullstack.edu.vn/f8-prod/user_photos/403965/664770f2a2091.jpg',
        name: 'Đạt Nguyễn Đức ',
        message: 'đã thích bình luận của bạn',
        time: '2 ngày trước'
    },
    {
        avatar: 'https://files.fullstack.edu.vn/f8-prod/user_photos/403965/664770f2a2091.jpg',
        name: 'Đạt Nguyễn Đức ',
        message: 'đã thích bình luận của bạn',
        time: '2 ngày trước'
    },
    {
        avatar: 'https://files.fullstack.edu.vn/f8-prod/user_photos/403965/664770f2a2091.jpg',
        name: 'Đạt Nguyễn Đức ',
        message: 'đã thích bình luận của bạn',
        time: '2 ngày trước'
    },
    {
        avatar: 'https://files.fullstack.edu.vn/f8-prod/user_photos/403965/664770f2a2091.jpg',
        name: 'Đạt Nguyễn Đức ',
        message: 'đã thích bình luận của bạn',
        time: '2 ngày trước'
    },
    {
        avatar: 'https://files.fullstack.edu.vn/f8-prod/user_photos/403965/664770f2a2091.jpg',
        name: 'Đạt Nguyễn Đức ',
        message: 'đã thích bình luận của bạn',
        time: '2 ngày trước'
    },
    
]

function Messages() {
    const htmls = messages.map((message, index) => (
        <div key={index} className="message">
            <span className="message__wrap-avatar">
                <img src={message.avatar} className="message-avatar" />
            </span>

            <span className="message__wrap-title">
                <div>
                    <strong>{message.name}</strong>
                    {message.message}
                </div>
                <div className="message__time">{message.time}</div>
            </span>
        </div>
    ));

    return htmls;
}

export default Messages