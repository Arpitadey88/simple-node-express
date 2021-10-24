const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello from Second node Server..I am excited..Automatic restart with update!');
});

const users = [
    { id: 0, name: 'Bobita', email: 'bobita@gmail.com', phone: '01768555444' },
    { id: 1, name: 'Shabana', email: 'shabana@gmail.com', phone: '01768555444' },
    { id: 2, name: 'Suchorita', email: 'suchorita@gmail.com', phone: '01768555444' },
    { id: 3, name: 'Shabnoor', email: 'shabnoor@gmail.com', phone: '01768555444' },
    { id: 4, name: 'Shabnaz', email: 'shabnaz@gmail.com', phone: '01768555444' },
    { id: 5, name: 'Susmita', email: 'susmita@gmail.com', phone: '01768555444' }
]

// app.get('/users', (req, res) => {
//     res.send(users)
// })

app.get('/users', (req, res) => {
    const search = req.query.search;
    // use search query parameter   
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
});

// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// dynamic api(dynamic id dia dynamic parameter use korsi)
app.get('/users/:id', (req, res) => {
    const id = (req.params.id);
    const user = users[id];
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges', 'banana', 'grapes', 'pine-apple', 'papaya', 'Lichi', 'watermelon'])
});

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('yummy yummy fazli mango');
})

app.listen(port, () => {
    console.log('Listening to port', port);
})