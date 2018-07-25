//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb'); //ES6 object destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
	if(err){
		return console.log('Unable to mongodb server');
	}
	console.log('Connected to mongodb server');
	
	/*const db = client.db('TodoApp');
	
	db.collection('Todos').insertOne({
		text: 'Something to do',
		completed: false
	}, (err, result) => {
		if(err){
			return console.log('Unable to insert todo');
		}
		console.log(JSON.stringify(result.ops, undefined, 2))
	});
	*/
	
	const db = client.db('TodoApp');
	
	db.collection('Users').insertOne({
		name: 'Gopal',
		age: 32,
		location: 'New Delhi'
	}, (err, result) => {
		if(err){
			return console.log('Unable to insert todo');
		}
		console.log(JSON.stringify(result.ops, undefined, 2));
	});
	
	
	client.close();
});