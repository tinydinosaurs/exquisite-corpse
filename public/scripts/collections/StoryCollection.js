import Backbone from 'backbone';
import Story from './../models/StoryModel.js';

export default new Backbone.Collection.extend({
	model: Story,
	url: '/api/v1/story'
});