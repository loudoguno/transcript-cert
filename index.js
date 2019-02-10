"use strict";

const conventions = require('@0xcert/conventions')
const Object88 = conventions.Object88;
const schema88 = conventions.schema88;
const Cert = require('@0xcert/cert').Cert;

const data = {
    name: 'Magic Sword',
    description: 'A weapon for the Troopers game which can severely injure the enemy.',
    image: 'https://troopersgame.com/dog.jpg',
};
console.log("data is", data)

const cert = new Cert({
    schema: schema88,
});
console.log("cert is", cert)

cert.imprint(data).then(function(imprint)
{
	console.log("imprint is", imprint)

	cert.disclose(data, [
	    ['description'],
	    ['image'],
	]).then(function(evidence)
	{
		console.log("evidence is", JSON.stringify(evidence, null, '  '))
	});
});
