import React from 'react';
import $ from 'jquery';
import {browserHistory} from 'react-router';
import Story from '../../models/StoryModel';
import entry from '../../models/EntryModel';
import user from '../../models/UserModel';

let coverImages = [
	'https://upload.wikimedia.org/wikipedia/en/9/9d/The_Tilled_Field.jpg',
	'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Joan_Mir%C3%B3%2C_1920%2C_Horse%2C_Pipe_and_Red_Flower%2C_oil_on_canvas%2C_82.6_x_74.9_cm%2C_Philadelphia_Museum_of_Art.jpg/220px-Joan_Mir%C3%B3%2C_1920%2C_Horse%2C_Pipe_and_Red_Flower%2C_oil_on_canvas%2C_82.6_x_74.9_cm%2C_Philadelphia_Museum_of_Art.jpg',
	'http://uploads5.wikiart.org/images/jean-arp/leafage-and-drops.jpg!PinterestSmall.jpg',
	'http://uploads0.wikiart.org/images/jean-arp/relief-clock.jpg!PinterestSmall.jpg',
	'https://upload.wikimedia.org/wikipedia/en/thumb/0/02/The_Hat_Makes_the_Man.jpg/300px-The_Hat_Makes_the_Man.jpg',
	'https://upload.wikimedia.org/wikipedia/en/3/37/ManRayMisunderstood.jpg',
	'https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Man_Ray%2C_1919%2C_Seguidilla%2C_airbrushed_gouache%2C_pen_%26_ink%2C_pencil%2C_and_colored_pencil_on_paperboard%2C_55.8_x_70.6_cm%2C_Hirshhorn_Museum_and_Sculpture_Garden.jpg/320px-Man_Ray%2C_1919%2C_Seguidilla%2C_airbrushed_gouache%2C_pen_%26_ink%2C_pencil%2C_and_colored_pencil_on_paperboard%2C_55.8_x_70.6_cm%2C_Hirshhorn_Museum_and_Sculpture_Garden.jpg',
	'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Shirt_Front_and_Fork.JPG/257px-Shirt_Front_and_Fork.JPG',
	'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Klee_Theatre_of_animals.jpg/207px-Klee_Theatre_of_animals.jpg',
	'https://upload.wikimedia.org/wikipedia/commons/d/d1/Red_Balloon.JPG',
	'https://upload.wikimedia.org/wikipedia/commons/7/70/Tale_%C3%A0_la_Hoffmann_by_Paul_Klee_1921.jpg',
	'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Object_%28Le_D%C3%A9jeuner_en_fourrure%29.jpg/320px-Object_%28Le_D%C3%A9jeuner_en_fourrure%29.jpg',
	'http://uploads8.wikiart.org/images/georges-papazoff/the-sea-1925.jpg',
	'http://uploads0.wikiart.org/images/xul-solar/juzgue-1923.jpg',
	'http://uploads2.wikiart.org/images/leonora-carrington/untitled-1979.jpg',
	'http://uploads6.wikiart.org/images/leonora-carrington/the-conjurer-1960.jpg'
];

export default React.createClass({
	getInitialState: function() {
		// console.log('this is my initial state');
		return {
			story: Story,
			user: user,
			entry: entry,
			coverImages: coverImages		
		};
	},

	render: function() {
		return (
			<section className="compose">
				<h1>Start a story</h1>
				<p>So you're ready to start a story, huh? Awesome. You'll need to give your story a title before you submit. Obviously, you'll also need to write something. Keep it clean and don't be a jerk. Otherwise, anything goes!</p>
				<form onSubmit={this.startStory} className="story-form">
					<label className="label">give it a title!</label>
					<p className="control">
						<input className="input" type="text" placeholder="story title" ref="title" />
					</p>
					<label className="label">write something!</label>
					<p className="control">
						<textarea className="textarea" placeholder="start writing" ref="compose"></textarea>
					</p>
					<p className="control">
						<button className="button is-primary is-outlined">Submit</button>
					</p>
				</form>
			</section>
			);
	}, //end render function

	startStory: function(e) {
		e.preventDefault();
		// console.log(this.state.user.id);
		// console.log(this.refs.title.value);
		// console.log(coverImages[Math.floor(Math.random() * 16)]);
		$.ajax({
			url: '/api/v1/story',
			type: 'POST',
			data: {
				title: this.refs.title.value,
				userId: this.state.user.id,
				coverImage: coverImages[Math.floor(Math.random() * 16)]
			},
			headers: {
				Accept: 'application/json'
			},
			success: (data) => {
				// console.log(data);
				// console.log(data.id);
				$.ajax({
					url: '/api/v1/entry',
					type: 'POST',
					data: {
						storyId: data.id,
						userId: this.state.user.id,
						content: this.refs.compose.value,
						order: 0
					},
					header: {
						Accept: 'application/json'
					},
					success: (entryAdded) => {
						console.log(entryAdded);
						browserHistory.push('/confirmation');
					},
					error: (entryError) => {
						console.log('entry addition failed');
					}
				});
			},
			error: (errorArg) => {
				console.log('something went horribly wrong');
			}
		});
	}
}); 

// future functionality: random title generator
