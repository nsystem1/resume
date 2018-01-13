import React from 'react';
import ReactDOM from 'react-dom';

const STORE_KEY = 'USE_DARK_MODE';

class Resume extends React.Component {
	state = {
		checkedInput: false
	};

	componentWillMount() {
		const checked = localStorage.getItem(STORE_KEY) || false;
		this.setState({ checkedInput: JSON.parse(checked) });
	}

	handleToggle = () => {
		const checkedInput = !this.state.checkedInput;
		localStorage.setItem(STORE_KEY, checkedInput);
		this.setState({ checkedInput });
	};

	render() {
		return (
			<div id="wrapper" className={this.state.checkedInput ? 'dark-theme' : 'default-theme'}>
				<section className="controls">
					<div className="toggle-theme">
						<i className="mdi mdi-24px mdi-white-balance-sunny" />
						<label className="switch">
							<input checked={this.state.checkedInput} onChange={this.handleToggle} type="checkbox" />
							<span className="slider" />
						</label>
						<i className="mdi mdi-24px mdi-weather-night" />
					</div>
				</section>
				<main className="sheet">
					<section className="flex head">
						<div className="flex-item">
							<h1>Udoka Kenneth Nkwocha</h1>
						</div>
						<div className="flex-item">
							<a className="download-btn">
								<i className="mdi mdi-file-pdf" /> Download PDF
							</a>
						</div>
					</section>
					<section className="flex contact">
						<span className="flex-item">
							<a className="contact-item" href="http://udoka.me/">
								<i className="mdi mdi-earth" />
								&nbsp;http://udoka.me/
							</a>
						</span>
						<span className="flex-item">
							<a className="contact-item" href="mailto:writeudo@gmail.com">
								<i className="mdi mdi-gmail" />
								&nbsp;writeudo@gmail.com
							</a>
						</span>
						<span className="flex-item">
							<a className="contact-item" href="https://github.com/Udokah">
								<i className="mdi mdi-github-circle" />
								&nbsp;/udoka
							</a>
						</span>
						<span className="flex-item">
							<a className="contact-item" href="https://ng.linkedin.com/in/thisisudo">
								<i className="mdi mdi-linkedin-box" />
								&nbsp;/thisisudo
							</a>
						</span>
					</section>
					<section className="pitch">
						<p>
							Passionate about learning and building stuff for the web. Able to understand business requirements, prioritise work based on highest business value and work with teams to solve
							problems.
						</p>
					</section>
					<section className="section">
						<h2>Experience</h2>
						<div className="flex">
							<article className="flex-item">
								<h3>
									Front-End Engineer Facebook <small className="date">2018-2020</small>
								</h3>
								<p>
									I was a part of the team that used the MEAN stack (MongoDB, Express.js, AngularJS, and Node.js) to develop an internal application to help Andela track and manage ed
									support Andela's Now We Give initiative, a program that offers to build websites for clients in exchange for charitable donations.
								</p>
								<div className="tags">
									<span className="tag-item">css</span>
									<span className="tag-item">html</span>
								</div>
							</article>
							<article className="flex-item">
								<h3>
									Front-End Engineer Facebook <small className="date">2018-2020</small>
								</h3>
								<p>
									I was a part of the team that used the MEAN stack (MongoDB, Express.js, AngularJS, and Node.js) to develop an internal applicatioor clients in exchange for charitable
									donations.
								</p>
								<div className="tags">
									<span className="tag-item">css</span>
									<span className="tag-item">html</span>
								</div>
							</article>
						</div>
					</section>
					<section className="section">
						<h2>Experience</h2>
						<div className="flex">
							<article className="flex-item">
								<h3>
									Front-End Engineer Facebook <small className="date">2018-2020</small>
								</h3>
								<p>
									I was a part of the team that used the MEAN stack (MongoDB, Express.js, AngularJS, and Node.js) to develop an internal application to help Andela track and manage ed
									support Andela's Now We Give initiative, a program that offers to build websites for clients in exchange for charitable donations.
								</p>
								<div className="tags">
									<span className="tag-item">css</span>
									<span className="tag-item">html</span>
								</div>
							</article>
							<article className="flex-item">
								<h3>
									Front-End Engineer Facebook <small className="date">2018-2020</small>
								</h3>
								<p>
									I was a part of the team that used the MEAN stack (MongoDB, Express.js, AngularJS, and Node.js) to develop an internal applicatioor clients in exchange for charitable
									donations.
								</p>
								<div className="tags">
									<span className="tag-item">css</span>
									<span className="tag-item">html</span>
								</div>
							</article>
						</div>
					</section>
				</main>
			</div>
		);
	}
}

export default Resume;
