require('./User');
require('./Entry');
module.exports = bookshelf.model('Story', {
	tableName: 'stories',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	creator: function() {
		return this.belongsTo('User', 'userId');
	},
	entry: function() {
		return this.hasMany('Entry', 'storyId');
	}
});