const express = require('express');
const { postEvent, getEvents, getEventById, deleteEventById } = require('../controllers/event.controller');

const router = express.Router();

// POST an event
router.post('/create-event', postEvent);

// GET all events
router.get('/', getEvents);

// GET an event by ID
router.get('/:eventId', getEventById);

// DELETE an event by ID

router.delete('/delete/:eventId', deleteEventById);

module.exports = (app) => {
    app.use('/api/events', router);
};