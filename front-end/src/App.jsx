import React, { useEffect, useState } from 'react';
import './App.scss';
import Comment from './components/comment/Comment';
import getByEndpoint from './helpers/getByEndpoint';

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getByEndpoint('comment').then((data) => setComments(data));
  }, [comments]);

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
    </div>
  );
}

export default App;
