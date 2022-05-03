import React, { useEffect, useState } from 'react';
import './App.scss';
import CommentForm from './components/comment-form/CommentForm';
import Comment from './components/comment/Comment';
import getByEndpoint from './helpers/getByEndpoint';

function App() {
  const [comments, setComments] = useState([]);

  const updateComments = () => getByEndpoint('comment').then((data) => setComments(data));

  useEffect(() => {
    updateComments();
  }, []);

  return (
    <div className="App">
      {comments.map(({
        id, content, createdAt, score,
        user: { userName, imagePng },
      }) => (
        <Comment
          key={`comment-${id}`}
          name={userName}
          img={imagePng}
          date={createdAt}
          content={content}
          rate={score}
        />
      ))}

      <CommentForm update={updateComments} />
    </div>
  );
}

export default App;
