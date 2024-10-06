const express = require('express');
const { getRecommendations, addJobPosting } = require('../controllers/recommendationController');
const router = express.Router();

router.post('/recommend', getRecommendations);
router.post('/jobs', addJobPosting);

module.exports = router;
