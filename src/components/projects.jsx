import React from 'react';
import ReactDOM from 'react-dom';

const Projects = () => {
	return (
		<section className="section">
			<h2>Personal Projects</h2>
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
		</section>
	);
};

export default Projects;
