const express = require('express');
const router = express.Router();
const db = require('../db/queries');

router.get("/gamelist", async (req, res) => {
    try {
        const games = await db.getAllGames();
        console.log(games);
        res.status(200).json(games)
    } catch (err) {
        console.log('Error fetching data: ', err);
        res.status(500).json({error: 'Failed to fetch data'});
    }
} )

router.post("/addgame", async (req, res) => {
    try {
        await db.addNewGame('Super Mario Odyssey', '2017-10-27', null, null, 1 );
        res.status(200).json({status: 'Added game'});
    } catch (err) {
        console.log('Error: Failed to add game.')
        res.status(500).json({error: 'Failed to add game.'})
    }
})

router.delete("/deletegame", async (req, res) => {
    try {
        await db.deleteGame(4);
        res.status(200).json({success: 'Deleted game'})
    } catch (err) {
        console.log('Error: Failed to delete game.', err);
        res.status(500).json({error: 'Failed to delete game.'})
    }
})

router.post("/addpublisher", async(req, res) => {
    try {
        await db.addPublisher("Electronic Arts");
        res.status(200).json({success: 'Added publisher'})
    } catch (err) {
        console.log("Failed to add publisher", err);
        res.status(500).json({error: err});
    }
})

module.exports = router;