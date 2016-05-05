import React from 'react';

export default React.createClass({
	render: function() {
		return (
			<section className="home">
				<div className="hero is-large">
					<h1 class="title">...join the story</h1>
				</div>
				<div className="list-section">
					<h1>complete stories</h1>
					<div className="complete-stories columns">
						<div className="story-box column">
							<img src="/../../../images/indefinite_divisibility_sm.png" />
							<h2>The fox eats grass</h2>
						</div>
						<div className="story-box column">
							<img src="/../../../images/indefinite_divisibility_sm.png" />
							<h2>The fox eats grass</h2>
						</div>
						<div className="story-box column">
							<img src="/../../../images/indefinite_divisibility_sm.png" />
							<h2>The fox eats grass</h2>
						</div>
						<div className="story-box column">
							<img src="/../../../images/indefinite_divisibility_sm.png" />
							<h2>The fox eats grass</h2>
						</div>
					</div>
				</div>	
			</section>
			);
	}
});