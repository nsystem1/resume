import React from 'react';
import ReactDOM from 'react-dom';

const Resume = () => {
	return (
		<div id="wrapper" className="default-theme">
			<main className="sheet">
				<section className="flex head">
					<div className="flex-item">
						<h1>Udo Nkwocha</h1>
					</div>
					<div className="flex-item right-align">
						<button>Download PDF</button>
					</div>
				</section>
				<section className="flex contact">
					<span className="flex-item contact-item">
						<a>website</a>
					</span>
					<span className="flex-item contact-item">
						<a>github</a>
					</span>
					<span className="flex-item contact-item">
						<a>email</a>
					</span>
					<span className="flex-item contact-item">
						<a>linkedin</a>
					</span>
				</section>
				<section className="pitch">
					<p>I am awesome!</p>
				</section>
				<section className="section">
					<h2>Experience</h2>
					<div className="flex">
						<article className="flex-item">
							<h3>
								Front-End Engineer Facebook <small className="date">2018-2020</small>
							</h3>
							<p>stuff I did there</p>
							<div className="tags">
								<span className="tag-item">css</span>
								<span className="tag-item">html</span>
							</div>
						</article>
						<article className="flex-item">
							<h3>
								Front-End Engineer Facebook <small className="date">2018-2020</small>
							</h3>
							<p>stuff I did there</p>
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
};

export default Resume;
