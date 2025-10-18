const express = require('express');
const router = express.Router();
const db = require('../db/queries');
const { end } = require('../db/pool');

// Values are hardcoded as I have not created a frontend to utilize the data yet

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
        const { title, release_date, start_date, end_date, description, publisher} = req.body;
        console.log( title, release_date, start_date, end_date, description, publisher )
        await db.addNewGame(title, release_date, start_date, end_date, publisher, description,  null);
        res.status(200).json({status: 'Added game'});
    } catch (err) {
        console.log('Error: Failed to add game.')
        res.status(500).json({error: 'Failed to add game.'})
    }
})

router.delete("/deletegame", async (req, res) => {
    try {
        await db.deleteGame(req.body.id);
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

router.get("/getpublishers", async(req, res) => {
    try {
        const publishers  = await db.getPublishers();
        res.status(200).json(publishers);
        console.log(publishers);
    } catch (err) {
        console.log('Error: Failed to get publishers.', err);
        res.status(500).json({error: err})
    }
} )

router.get("/getcategories", async(req, res) => {
    try {
        const categories = await db.getCategories();
        res.status(200).json(categories);
    } catch (err) {
        console.log('Error: Failed to get categories.', err);
        res.status(500).json({error: err})
    }
})

module.exports = router;