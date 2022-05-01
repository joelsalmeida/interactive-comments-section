const express = require('express');
const cors = require('cors');

const user = require('./src/routes/user-routes');
const comment = require('./src/routes/comment-routes');
const reply = require('./src/routes/reply-routes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/user', user);
app.use('/comment', comment);
app.use('/reply', reply);

const PORT = 3000;

app.listen(PORT, () => console.log(`Listen at: ${PORT}`));
