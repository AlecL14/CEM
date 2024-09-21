import axios from 'axios';

// API base URL - Constant
const API_BASE_URL = 'http://localhost:4000/api/events';

// Create an instance of axios with the base URL

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Event API functions ----------------------------------------------------------
export const getAllEvents = () => api.get('/');
export const getEventById = (eventId) => api.get(`/${eventId}`);
export const createEvent = (eventData) => api.post('/create-event', eventData);
export const deleteEvent = (eventId) => api.delete(`/delete/${eventId}`);

export default api;