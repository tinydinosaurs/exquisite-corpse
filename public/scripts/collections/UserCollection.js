import Backbone from 'backbone';
import User from './../models/UserModel.js';

export default new Backbone.Collection.extend({
	model: User,
	url: '/api/v1/user'
});