import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';
import RateButton from '../rate-button/RateButton';
import ReplyButton from '../reply-button/ReplyButton';
import CommentInfo from '../comment-info/CommentInfo';

function Comment({
  name, img, date, content, rate,
}) {
  return (
    <div className="comment">
      <CommentInfo
        name={name}
        img={img}
        date={date}
      />

      <p className="comment-content">{content}</p>

      <div className="comment-interactions">
        <RateButton rate={rate} />
        <ReplyButton />
      </div>
    </div>
  );
}

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
};

export default Comment;
