require('./User');
require('./Story');
module.exports = bookshelf.model('Entry', {
	tableName: 'entries',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	contributor: function() {
		return this.belongsTo('User', 'userId');
	},
	story: function() {
		return this.belongsTo('Story', 'storyId');
	}
});