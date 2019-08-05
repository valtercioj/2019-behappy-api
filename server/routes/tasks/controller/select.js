import knex from '../../../config/knex';

export default function(req, res, next) {
	knex
	.from("tasks")
	.select('id', 'title', 'description')
	.then(results => res.send(results))
	.catch(err => res.status(500).send(err))
}