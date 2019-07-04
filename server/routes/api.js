import express from 'express';
import knex from '../config/knex';
const router = express.Router();

/*
* 	@api task
* 	@method get
*/
router.get('/', function(req, res, next) {
	knex
	.from("tasks")
  .select('id', 'title', 'description')
	.then(results => res.send(results))
	.catch(err => res.status(500).send(err))
});

export default router;
