import React from 'react';
import './ReplyButton.scss';
import replyIcon from '../../images/icons/icon-reply.svg';

function ReplyButton() {
  return (
    <div className="reply-button">
      <img className="reply-button__icon" src={replyIcon} alt="" />
      <span>Reply</span>
    </div>
  );
}

export default ReplyButton;
