const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
const PORT = 3000;
app.use(cors());

const gameRoutes = require('./routes/game_backlog_routes');

app.use('/api', gameRoutes);

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));