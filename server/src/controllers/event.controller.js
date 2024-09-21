const Event = require('../database/models/event.model');

// POST a new event
const postEvent = async (req, res) => {
    try {
        const event = await Event.create(req.body);
        await event.save();
        res.status(201).json(event);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// GET all events
const getEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET an event by ID
const getEventById = async (req, res) => {
    try {
        const event = await Event.findOne({ eventId: req.params.eventId });
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE an event by ID
const deleteEventById = async (req, res) => {
    try {
        const event = await Event.findOneAndDelete({ eventId: req.params.eventId });
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json({ message: 'Event deleted successfully', event });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    postEvent,
    getEvents,
    getEventById,
    deleteEventById
};