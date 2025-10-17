const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
const PORT = 3000;
const db = require('./db/queries');


app.get("/api/gamelist", async (req, res) => {
    try {
        const games = await db.getAllGames();
        console.log(games);
        res.status(200).json(games)
    } catch (err) {
        console.log('Error fetching data: ', err);
        res.status(500).json({error: 'Failed to fetch data'});
    }
} )

app.post("/api/addgame", async (req, res) => {
    try {
        await db.addNewGame('Super Mario Odyssey', '2017-10-27', null, null, 1 );
        res.status(200).json({status: 'Added game'});
    } catch (err) {
        console.log('Error: Failed to add game.')
        res.status(500).json({error: 'Failed to add game.'})
    }
})

app.delete("/api/deletegame", async (req, res) => {
    try {
        await db.deleteGame(4);
        res.status(200).json({success: 'Deleted game'})
    } catch (err) {
        console.log('Error: Failed to delete game.', err);
        res.status(500).json({error: 'Failed to delete game.'})
    }
})

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));