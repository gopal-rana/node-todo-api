//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb'); //ES6 object destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
	if(err){
		return console.log('Unable to mongodb server');
	}
	console.log('Connected to mongodb server');
	
	const db = client.db('TodoApp');
	
	/* db.collection('Todos').find({completed: true}).toArray().then((docs) => {
		console.log('docs');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fecth todos', err);
	}); */
	
	/* db.collection('Todos').find().count().then((count) => {
		console.log(`Total docs count:  ${count}`);
	}, (err) => {
		console.log('Unable to fecth todos', err);
	}); */
	
	db.collection('Users').find({name: 'Gopal'}).count().then((count) => {
		console.log(`Total records count ${count}`);
	}, (err) => {
		console.log('Unable to fecth todos', err);
	});
	
	db.collection('Users').find({name: 'Gopal'}).toArray().then((users) => {
		console.log('Users');
		console.log(JSON.stringify(users, undefined, 2));
	}, (err) => {
		console.log('Unable to fecth todos', err);
	})
	
	
	//client.close();
});