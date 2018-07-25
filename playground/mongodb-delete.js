//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb'); //ES6 object destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
	if(err){
		return console.log('Unable to mongodb server');
	}
	console.log('Connected to mongodb server');
	
	const db = client.db('TodoApp');
	
	//delete many
	/* db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
		console.log(result);
	}); */
	
	//delete onerror
	/* db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
		console.log(result);
	}); */
	
	//find one and delete
	
	/* db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
		console.log(result);
	}); */
	
	/* db.collection('Users').deleteMany({name: 'Gopal'}).then((result) => {
		console.log(result);
	}); */
	
	db.collection('Users').findOneAndDelete({
		_id: new ObjectID("5b58230153f7c609ba34f503")
		}).then((result) => {
		console.log(JSON.stringify(result, undefined, 2));
	});
	
	//client.close();
});