//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb'); //ES6 object destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
	if(err){
		return console.log('Unable to mongodb server');
	}
	console.log('Connected to mongodb server');
	
	const db = client.db('TodoApp');
	
	/* db.collection('Todos').findOneAndUpdate({
		_id: new ObjectID("5b580bed59732507a0414c1e")
	}, {
		$set: {
			completed: true
		}
	}, {
		returnOriginal: false
	}). then((result) => {
		console.log(result);
	}); */
	
	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID("5b58234153f7c609ba34f533")
	}, {
		$set: {
			name: 'Gopal'
		},
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}). then((result) => {
		console.log(result);
	});
	
	client.close();
});