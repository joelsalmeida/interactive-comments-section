import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CommentForm.scss';
import postData from '../../helpers/postData';
import Button from '../button/Button';

const URL = `http://${process.env.REACT_APP_BACK_HOST}/comment`;

function CommentForm({ update }) {
  const [comment, setComment] = useState('');

  const send = () => {
    postData(URL, { userId: 1, content: comment }).then(() => update());
    setComment('');
  };

  return (
    <form action="" className="comment-form">
      <textarea
        className="comment-form__textarea"
        value={comment}
        placeholder="Add a comment..."
        onChange={({ target }) => setComment(target.value)}
      />

      <div className="comment-form__send-area">
        <img src="/image-juliusomo.png" alt="" />

        <Button
          text="Send"
          handleClick={send}
        />

      </div>
    </form>
  );
}

CommentForm.propTypes = {
  update: PropTypes.func.isRequired,
};

export default CommentForm;
