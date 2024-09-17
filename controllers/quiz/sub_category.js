const Quiz = require('../../models/Quiz');

const distinctSubcategories = async (req, res) => {
    try {
        const { category } = req.query;

        const query = {};
        if (category) {
            query.category = category;
        }

        const subcategories = await Quiz.distinct('sub_category', query);
        res.json({ subcategories });
    } catch (error) {
        console.error('Error fetching unique subcategories:', error);
        res.status(500).json({ error: 'Failed to fetch unique subcategories' });
    }
};

module.exports = distinctSubcategories;