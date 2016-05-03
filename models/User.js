require('./Authentication');
require('./Story');
module.exports = bookshelf.model('User', {
	tableName: 'users',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	authentication: function() {
		return this.hasMany('Authentication', 'userId');
	},
	stories: function() {
		return this.hasMany('Story', 'userId');
	}
});