const Quiz = require('../../models/Quiz');

const category = async (req, res) => {
    try {
      const categories = await Quiz.distinct('category');
      res.json({ categories });
    } catch (error) {
      console.error('Error fetching unique categories:', error);
      res.status(500).json({ error: 'Failed to fetch unique categories' });
    }
}

module.exports = category;