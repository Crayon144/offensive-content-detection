const request = require('request');
const cheerio = require('cheerio');
require('@tensorflow/tfjs');
const toxicity = require('@tensorflow-models/toxicity');

var URL =
	'https://twitter.com/search?q=%23photographer&src=typeahead_click&f=top';

request(URL, function (err, res, body) {
	if (err) {
		console.log(err);
	} else {
		let $ = cheerio.load(body); //loading of complete HTML body
		$('li.stream-item').each(function (index) {
			const text = $(this).find('p.tweet-text').text();
			const name = $(this).find('.fullname').text();
			console.log('user : ' + name); //name of the user
			console.log('tweet : ' + text); //tweet content
			console.log('===========================');
		});
    $('img').each(function (index) {
      
    });
	}
});

// The minimum prediction confidence.
// const threshold = 0.9;

// // Load the model. Users optionally pass in a threshold and an array of
// // labels to include.
// toxicity.load(threshold).then(model => {
// 	const sentences = ['you suck'];

// 	model.classify(sentences).then(predictions => {
// 		// `predictions` is an array of objects, one for each prediction head,
// 		// that contains the raw probabilities for each input along with the
// 		// final prediction in `match` (either `true` or `false`).
// 		// If neither prediction exceeds the threshold, `match` is `null`.

// 		for(let i = 0; i < predictions.length; i++) {
// 			console.log(predictions[i].results[0].probabilities);
// 		}
// 		/*
//     prints:
//     {
//       "label": "identity_attack",
//       "results": [{
//         "probabilities": [0.9659664034843445, 0.03403361141681671],
//         "match": false
//       }]
//     },
//     {
//       "label": "insult",
//       "results": [{
//         "probabilities": [0.08124706149101257, 0.9187529683113098],
//         "match": true
//       }]
//     },
//     ...
//      */
// 	});
// });
