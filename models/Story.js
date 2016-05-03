require('./User');
module.exports = bookshelf.model('Story', {
	tableName: 'stories',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	creator: function() {
		return this.belongsTo('User', 'userId');
	}
});