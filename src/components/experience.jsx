import React from 'react';
import ReactDOM from 'react-dom';

const Experience = () => {
	return (
		<section className="section">
			<h2>Experience</h2>
			<div className="flex">
				<article className="flex-item">
					<h3>
						Software Engineer (Front-End) at Zalando SE <small className="date">Feb 2017 - Present</small>
					</h3>
					<p>
						Working on tools to increase developer productivity. Building apps using Micro-service for frontend architecture. Setup monitoring and tracking to gain more insights & visibility
						into user behaviour.
					</p>
					<div className="tags">
						<span className="tag-item">NodeJS</span>
						<span className="tag-item">React</span>
						<span className="tag-item">Redux</span>
						<span className="tag-item">SCSS</span>
						<span className="tag-item">Javascript ES6</span>
					</div>
					<div className="tags">
						<span className="tag-item">Webpack</span>
						<span className="tag-item">AppDynamics</span>
						<span className="tag-item">Google Analytics</span>
						<a href="https://www.zalando.de/" target="_blank" className="tag-item">
							<i className="mdi mdi-earth" /> zalando.de
						</a>
					</div>
				</article>
				<article className="flex-item">
					<h3>
						Front-End Developer at virtualQ GMBH<small className="date">Feb 2016 - Jan 2017</small>
					</h3>
					<p>
						Migrated core company products - dashboards and 3rd party embeddable widgets - from Ruby (Rails) to Javascript (React) while supporting multiple languages English and German.
						Created charts using D3 give more insights to customers.
					</p>
					<div className="tags">
						<span className="tag-item">NodeJS</span>
						<span className="tag-item">React</span>
						<span className="tag-item">Redux</span>
						<span className="tag-item">SCSS</span>
						<span className="tag-item">D3</span>
						<a href="https://virtualq.io/" target="_blank" className="tag-item">
							<i className="mdi mdi-earth" /> virtualq.io
						</a>
					</div>
				</article>
			</div>
			<div className="flex">
				<article className="flex-item">
					<h3>
						Software Developer at Andela <small className="date">Feb 2015 - Feb 2016</small>
					</h3>
					<p>
						Built apps to track and manage the placement of developers on client engagment. Built an internal app integrated with Slack to manage the usage of available laundry machines. I
						also helped support Andela's <strong>Now We Give initiative</strong>, a program that offers to build websites for clients in exchange for charitable donations.
					</p>
					<div className="tags">
						<span className="tag-item">NodeJS</span>
						<span className="tag-item">AngularJS</span>
						<span className="tag-item">Firebase</span>
						<span className="tag-item">MongoDB</span>
						<span className="tag-item">Ruby On Rails</span>
					</div>
					<div className="tags">
						<span className="tag-item">Javascript</span>
						<span className="tag-item">CSS3</span>
						<span className="tag-item">PostgreSQL</span>
						<a href="https://andela.com/" target="_blank" className="tag-item">
							<i className="mdi mdi-earth" /> andela.com
						</a>
					</div>
				</article>
				<article className="flex-item">
					<h3>
						Full-stack Developer at UDCreate LTD<small className="date">Jan 2013 - Feb 2015</small>
					</h3>
					<p>Remote/Onsite consulting for tools & apps owned by small and medium scale businesses. Built & maintained over 15+ projects for happy clients.</p>
					<div className="tags">
						<span className="tag-item">Linux</span>
						<span className="tag-item">Apache</span>
						<span className="tag-item">MySQL</span>
						<span className="tag-item">PHP</span>
						<span className="tag-item">Java</span>
						<span className="tag-item">Android</span>
					</div>
					<div className="tags">
						<span className="tag-item">Javascript</span>
						<span className="tag-item">CSS3</span>
						<span className="tag-item">jQuery</span>
						<span className="tag-item">Bootstrap</span>
						<a href="http://udoka.me/" target="_blank" className="tag-item">
							<i className="mdi mdi-earth" /> udoka.me
						</a>
					</div>
				</article>
			</div>
			<div className="flex">
				<article className="flex-item">
					<h3>
						Frontend Developer at Botosoft Tech LTD <small className="date">Jun 2011 - Aug 2014</small>
					</h3>
					<p>
						Onsite consulting. I worked closely with UI designers to create awesome user interfaces offering an intuitive user experience. My roles involved tranforming designs and sketches
						to semantic HTML/CSS code equivalent.
					</p>
					<div className="tags">
						<span className="tag-item">HTML5</span>
						<span className="tag-item">CSS3</span>
						<span className="tag-item">Javascript</span>
						<span className="tag-item">jQuery</span>
						<a href="http://www.botosoft.com/" target="_blank" className="tag-item">
							<i className="mdi mdi-earth" /> www.botosoft.com
						</a>
					</div>
				</article>
				<article className="flex-item">
					<h3>
						Full-stack Developer (Intern) at SME Funds<small className="date">Mar 2012 - Aug 2013</small>
					</h3>
					<p>Built marketing website, developed customer dashboard to signup customers, track referrals and generate customer reports. Also developed mini-ecommerce tool for customers.</p>
					<div className="tags">
						<span className="tag-item">Linux</span>
						<span className="tag-item">Apache</span>
						<span className="tag-item">MySQL</span>
						<span className="tag-item">PHP</span>
					</div>
					<div className="tags">
						<span className="tag-item">Javascript</span>
						<span className="tag-item">CSS3</span>
						<span className="tag-item">jQuery</span>
						<span className="tag-item">Bootstrap</span>
						<a href="http://www.smefunds.com/" target="_blank" className="tag-item">
							<i className="mdi mdi-earth" /> www.smefunds.com
						</a>
					</div>
				</article>
			</div>
		</section>
	);
};

export default Experience;
