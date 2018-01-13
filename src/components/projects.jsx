import React from 'react';
import ReactDOM from 'react-dom';

const Projects = () => {
	return (
		<section className="section">
			<h2>Selected Personal Projects</h2>
			<div className="flex">
				<article className="flex-item">
					<h3>
						Tweet Threader <small className="date">2017</small>
					</h3>
					<p>Simple app to create threaded tweets on Twitter experimenting with Javascript ES6's Generators and Promises.</p>
					<div className="tags">
						<span className="tag-item">NodeJS</span>
						<span className="tag-item">React</span>
						<span className="tag-item">Redux</span>
						<span className="tag-item">SCSS</span>
						<span className="tag-item">Javascript ES6</span>
						<a href="http://tweet-threader.herokuapp.com/" target="_blank" className="tag-item">
							<i className="mdi mdi-earth" /> tweet-threader
						</a>
					</div>
				</article>
				<article className="flex-item">
					<h3>
						Naija Phone Number <small className="date">2017</small>
					</h3>
					<p>A fast minimal NPM module to validate Nigerian mobile phone numbers using Regular Expressions.</p>
					<div className="tags">
						<span className="tag-item">Javascript</span>
						<span className="tag-item">Regular Expressions</span>
						<span className="tag-item">NPM</span>
						<a href="https://github.com/Udokah/naija-phone-number" target="_blank" className="tag-item">
							<i className="mdi mdi-github-circle" /> naija-phone-number
						</a>
					</div>
				</article>
			</div>
			<div className="flex">
				<article className="flex-item">
					<h3>
						LaundryApp & Bot<small className="date">2016</small>
					</h3>
					<p>An app integrated with a Slack bot to manage laundry machine usage, scheduling and notification for multiple registered laundry machine users.</p>
					<div className="tags">
						<span className="tag-item">Ruby</span>
						<span className="tag-item">Rails</span>
						<span className="tag-item">PostgreSQL</span>
						<span className="tag-item">jQuery</span>
						<span className="tag-item">Javascript</span>
						<a href="https://laundryapp.herokuapp.com/" target="_blank" className="tag-item">
							<i className="mdi mdi-earth" /> LaundryApp
						</a>
					</div>
				</article>
				<article className="flex-item">
					<h3>
						Event Calendar <small className="date">2015</small>
					</h3>
					<p>A simple app to manage calendar events.</p>
					<div className="tags">
						<span className="tag-item">Javascript</span>
						<span className="tag-item">CSS3</span>
						<span className="tag-item">Boostrap</span>
						<span className="tag-item">AngularJS</span>
						<a href="http://udokah.github.io/calendar-app/#/" target="_blank" className="tag-item">
							<i className="mdi mdi-earth" /> event-calendar-app
						</a>
					</div>
				</article>
			</div>
			<div className="flex">
				<article className="flex-item">
					<h3>
						Frogger Game <small className="date">2015</small>
					</h3>
					<p>A simple browser based game built just for fun. </p>
					<div className="tags">
						<span className="tag-item">Javascript</span>
						<span className="tag-item">HTML5 Canvas</span>
						<a href="http://udokah.github.io/frogger-game/" target="_blank" className="tag-item">
							<i className="mdi mdi-earth" /> frogger-fame
						</a>
					</div>
				</article>
				<article className="flex-item">
					<h3>
						Browser Drawing App <small className="date">2015</small>
					</h3>
					<p>A simple browser based drawing app built to learn more about HTML5 Canvas.</p>
					<div className="tags">
						<span className="tag-item">Javascript</span>
						<span className="tag-item">CSS3</span>
						<span className="tag-item">HTML5 Canvas</span>
						<a href="http://udokah.github.io/canvas-project/" target="_blank" className="tag-item">
							<i className="mdi mdi-earth" /> drawing-app
						</a>
					</div>
				</article>
			</div>
		</section>
	);
};

export default Projects;
