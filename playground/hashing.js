const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = 'abc@123';

bcrypt.genSalt(10, (err, salt) =>{
	bcrypt.hash(password, salt, (err, hash) => {
		console.log(hash);
	})
});

var hashedPassword = '$2a$10$76NcvK4l4BgD2tGPVl1W5OPVQCG.UrAkK4eKDJYvpn0Z/P1aSzj/i';
bcrypt.compare(password, hashedPassword, (err, res) =>{
	console.log(res);
});

/* var data = {
	id: 10
}

var token = jwt.sign(data, '123abc');

console.log(token);


var decoded = jwt.verify(token, '123abc');

console.log('decoded', decoded); */

/* var message = 'I am user number 3';

var hash = SHA256(message).toString();

console.log(`message: ${message}`);
console.log(`Hash: ${hash}`);

var data = {
	id: 4
}

var token = {
	data,
	hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
}

data.id = 5;
token.hash = SHA256(JSON.stringify(data)).toString();

var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();


if(resultHash === token.hash){
	console.log('Data was not manipulated');
} else {
	console.log('Data manipulated. Do not trust!')
} */