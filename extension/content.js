let elements = document.getElementsByTagName('*');
let url = chrome.runtime.getURL('data.json');

fetch(url)
	.then(response => response.json())
	.then(data => {
		for (let i = 0; i < elements.length; i++) {
			let element = elements[i];

			for (let j = 0; j < element.childNodes.length; j++) {
				let node = element.childNodes[j];

				if (node.nodeType === 3) {
					let text = node.nodeValue;
					let check = false;
					let word = '';
					for (let k = 0; k < data.length; k++) {
						if (text === data[k]) {
							check = true;
							word = data[k];
							break;
						}
					}
					if (check) {
						let replacedText = text.replace(
							word,
							'*****'
						);

						if (replacedText !== text) {
							element.replaceChild(
								document.createTextNode(replacedText),
								node
							);
						}
					}
				}
			}
		}
	})
	.catch(err => console.log(err));
