const express = require('express');
const app = express();
const PORT = 4000;


const cors = require('cors');

app.use(cors({
    origin: "http://localhost:5173",  // Allow requests from this origin
    credentials: true
}));

app.get('/', (req, res) => {
    // ... (your route handler)
});

app.get('/api/users', (req, res) => {
    res.json([{
        id:1,
        name:"John Doe",
        age:32
    },{
        id:2,
        name:"Jack Doe",
        age:52
    },
    {
        id:3,
        name:"Jane Doe",
        age:36
    },
    {
        id:4,
        name:"Kane",
        age:52
    }]);
});

app.listen(PORT, () => {
    console.log(`Server listening at http://127.0.0.1:${PORT}`);
});
