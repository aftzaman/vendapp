var db = require('../db');

module.exports = function (router) {

	// creation of category
	router.post('/createCategory', function (request, response) {
		db.Category.findOne({'name': request.query.name}, function (err, exist) {
			if(err) {
				response.json({
					error: true,
					errorCode: 'UNKNOWN_ERROR',
					stack: err
				});
			}
			else if(exist) {
				response.json({
					error: true,
					errorCode: 'Already exist'
				});
			}
			else if(!exist) {
				var category = new db.Category({
					'name': request.query.name
				});
				category.save(function (err, created) {
					if(err) {
						response.json({
							error: true,
							errorCode: 'UNKNOWN_ERROR',
							stack: err
						});
					}
					else if(!created) {
						response.json({
							error: true,
							errorCode: 'Unable to create'
						});
					}
					else if(created) {
						response.json({
							success: true,
							data: created
						});
					}
				});
			}
		});
	});



}
