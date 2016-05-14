let express = require('express');
let router = express.Router();
let path = require('path');
let bookshelfApi = require('bookshelf-api') ({
	path: path.join(__dirname, '../', 'models')
});
let loggedIn = require('../lib/middleware/logged-in');

router.get('/story', bookshelfApi);
router.post('/story', loggedIn, bookshelfApi);
router.get('/entry', bookshelfApi);
router.post('/entry', loggedIn,bookshelfApi);


router.use('/', bookshelfApi);
// router.get('/products', function(req, res, next) {

// });

module.exports = router;
