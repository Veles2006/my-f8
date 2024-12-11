import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faReply } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Messages.css';

const messages = [
    {
        avatar: 'https://files.fullstack.edu.vn/f8-prod/user_photos/403965/664770f2a2091.jpg',
        name: ['Đạt Nguyễn Đức'],
        message: [' đã thích bình luận của bạn.'],
        emotion: faThumbsUp,
        emotionBackground: 'message__emotion message__emotion--like',
        time: '2 ngày trước',
    },
    {
        avatar: 'https://files.fullstack.edu.vn/f8-prod/user_photos/177399/6221bed09f165.jpg',
        name: ['Hoàng Vinh Nguyễn'],
        message: [' đã nhắc tới bạn trong một bình luận.'],
        emotion: faReply,
        emotionBackground: 'message__emotion message__emotion--like',
        time: '3 tháng trước',
    },
    {
        avatar: 'https://fullstack.edu.vn/assets/feedback-0-BFb1fhaR.jpg',
        name: ['Việt Anh', '2 người khác'],
        message: [' và ', ' đã thích bình luận của bạn'],
        emotion: faThumbsUp,
        emotionBackground: 'message__emotion message__emotion--like',
        time: '3 tháng trước',
    },
    {
        avatar: 'https://files.fullstack.edu.vn/f8-prod/user_avatars/341586/6640ca094ec83.png',
        name: ['Văn Bảo Lê', '2 người khác'],
        message: [' và ',' đã bày tỏ cảm xúc về bình luận của bạn'],
        emotion: faThumbsUp,
        emotionBackground: 'message__emotion message__emotion--like',
        time: '4 tháng trước',
    },
    {
        avatar: 'https://fullstack.edu.vn/assets/feedback-0-BFb1fhaR.jpg',
        name: ['dat dui', '1 người khác'],
        message: [' và ', ' đã bày tỏ cảm xúc về bình luận của bạn'],
        emotion: faThumbsUp,
        emotionBackground: 'message__emotion message__emotion--like',
        time: '4 tháng trước',
    },
    {
        avatar: 'https://fullstack.edu.vn/assets/feedback-0-BFb1fhaR.jpg',
        name: ['Hồ Thái Thượng'],
        message: [' đã thích bình luận của bạn'],
        emotion: faThumbsUp,
        emotionBackground: 'message__emotion message__emotion--like',
        time: '5 tháng trước',
    },
    {
        avatar: 'https://files.fullstack.edu.vn/f8-prod/user_photos/169631/620c80dad6238.jpg',
        name: ['Hùng Đức'],
        message: [' đã thích bình luận của bạn'],
        emotion: faThumbsUp,
        emotionBackground: 'message__emotion message__emotion--like',
        time: '5 ngày trước',
    },
];

function Name({ names, messages }) {
    const htmls = names.map((name, index) => (
        <React.Fragment key={index}>
            <strong>{name}</strong>
            {messages[index] || ''}
        </React.Fragment>
    ));

    return <>{htmls}</>;
}

function Messages() {
    const htmls = messages.map((message, index) => (
        <div key={index} className="message">
            <span className="message__wrap-avatar">
                <img src={message.avatar} className="message-avatar" alt="avatar" />
                <span className={message.emotionBackground}>
                    <FontAwesomeIcon
                        icon={message.emotion}
                        className="message__emtion-icon"
                    />
                </span>
            </span>

            <span className="message__wrap-title">
                <div>
                    <Name 
                        names={message.name} 
                        messages={message.message} 
                    />
                </div>
                <div className="message__time">{message.time}</div>
            </span>
        </div>
    ));

    return htmls;
}

export default Messages;
