const express = require('express');
const router = express.Router();
const db = require('../config/databases');
const Gig = require('../models/Gig');

router.get('/', (req, res) => {
    Gig.findAll()
        .then(gigs => { 
            console.log(gigs)
            res.json(gigs);
        })
        .catch(err => console.log(err));
});

router.get('/:id', (req, res) => {
    Gig.findById(req.params.id)
        .then(gigs => {
            console.log(gigs.dataValues);
            res.json(gigs);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(404);
        });
});

router.post('/add', (req, res) => {
    Gig.create(req.body)
        .then(gigs => {
            console.log(gigs);
            res.send(gigs.dataValues);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(404);
        });
});

router.put('/:id', (req, res) => {
    Gig.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(gigs => {
        console.log(gigs);
        res.sendStatus(200);
    }).catch(err => {
        console.log(err);
        res.sendStatus(404);
    });
});

router.delete('/:id', (req, res) => {
    Gig.destroy({
        where: {
            id: req.params.id
        }
    }).then(gigs => {
        console.log(`Deleted gig with id = ${req.params.id}`);
        res.sendStatus(200);
    }).catch(err => {
        console.log(err);
        res.sendStatus(404);
    });
});

module.exports = router;