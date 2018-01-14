import pdf from 'html-pdf';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Resume from './src/components/resume.jsx';

const config = {
	format: 'A4',
	renderDelay: 1000,
	height: '950px',
	width: '1420px',
	orientation: 'portrait'
};

const html = ReactDOMServer.renderToString(<Resume />);

fs.readFile('./index.html', 'utf8', (err, data) => {
	if (err) throw err;

	const document = data
		.replace(/<div id="main" class="responsive"><\/div>/, `<div id="main" class="printer"${html}</div>`)
		.replace(/.\/dist\/bundle.js/, 'http://localhost:9090/dist/bundle.js');

	pdf.create(document, config).toFile('./resume.pdf', (err, res) => {
		if (err) return console.log(err);
		console.log(res);
	});
});
