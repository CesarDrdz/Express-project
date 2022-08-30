const express = require('express');
const path = require('path');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();
// loading hbs (handle bars )
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const PORT = 3000;

// Middleware 
app.use((req, res, next) => {
    const start = Date.now();
    // Always call the next function when building middleware.
    next();
    // Actions Go Here.. 
    // Checking to see the res time here.
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta}ms`);
});

app.use('/site',express.static(path.join(__dirname,'public')));
app.use(express.json());

// Mounting the Router 
app.get('/', (req, res) => {
    res.render('index', {
        title: 'My Friends are Very Clever',
        caption: 'Let\'s go skiing!',
    });
});
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
});