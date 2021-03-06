import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults: {
		title: '',
		creator: '',
		coverImage: '',
		createdAt: null,
		updatedAt: null,
		deletedAt: null
	},
	urlRoot: '/api/v1/story',
	idAttribute: 'id'
});