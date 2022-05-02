import React from 'react';
import PropTypes from 'prop-types';
import './CommentInfo.scss';

function CommentInfo({
  name, img, date,
}) {
  return (
    <div className="comment-info">
      <img className="comment-info__img" src={`/${img}`} alt={`${name}`} />
      <span className="comment-info__name">{name}</span>
      <span className="comment-info__date">{date}</span>
    </div>
  );
}

CommentInfo.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default CommentInfo;
