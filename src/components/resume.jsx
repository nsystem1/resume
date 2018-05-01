import React from 'react';
import ReactDOM from 'react-dom';
import Experience from './experience.jsx';
import Education from './education.jsx';
import Projects from './projects.jsx';
import Awards from './awards.jsx';

const STORE_KEY = 'USE_DARK_MODE';

class Resume extends React.Component {
	state = {
		checkedInput: false
	};

	componentWillMount() {
		if (typeof localStorage !== 'undefined') {
			const checked = localStorage.getItem(STORE_KEY) || false;
			this.setState({ checkedInput: JSON.parse(checked) });
		}
	}

	handleToggle = () => {
		if (typeof localStorage !== 'undefined') {
			const checkedInput = !this.state.checkedInput;
			localStorage.setItem(STORE_KEY, checkedInput);
			this.setState({ checkedInput });
		}
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
							<a className="download-btn" href="./resume.pdf" download="Udo_Nkwocha_Kenneth_Resume.pdf">
								<i className="mdi mdi-file-pdf" /> Download PDF
							</a>
						</div>
					</section>
					<section className="flex contact">
						<span className="flex-item">
							<a className="contact-item" href="https://udoka.me/">
								<i className="mdi mdi-earth" />
								&nbsp;https://udoka.me/
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
								&nbsp;/udokah
							</a>
						</span>
						<span className="flex-item">
							<a className="contact-item" href="https://www.linkedin.com/in/thisisudo/">
								<i className="mdi mdi-linkedin-box" />
								&nbsp;/thisisudo
							</a>
						</span>
					</section>
					<section className="pitch">
						<p>
							I am passionate about learning & improving my skills and also building stuff for the web. <br />
							Solid understanding of Javascript. <br />
							Solid knowledge of HTML5 & CSS3. <br />
							Understand responsive design and cross-browser compatibility issues. <br />
							Able to understand business requirements, prioritise work based on highest business value and work with teams to solve
							problems. <br />
							Experience building RESTful API's.
						</p>
					</section>
					<Experience />
					<Education />
					<Projects />
					<Awards />
				</main>
			</div>
		);
	}
}

export default Resume;
