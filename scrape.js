const cheerio = require('cheerio')
const jsonframe = require('jsonframe-cheerio')
const fs = require('fs');

fs.readFile('source.html', 'utf8', onSourceLoaded);

function onSourceLoaded(err, data) {
	const $ = cheerio.load(data)
	jsonframe($)
	
	let frame = {
		'data': {
			_s: '.sc-fMiknA',
			_d: [{
				'year': '.sc-gisBJw',
				'pubCount': 'div[data-bt-value]'
			}]
		}	
	}
	
	const result = $('body').scrape(frame, { string: true } )

	fs.writeFile("./result.json", result, 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("Saved data to file!");
	}); 
}