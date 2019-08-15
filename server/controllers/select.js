import { Task } from '../models';

export default function(req, res, next) {
	Task.getAll()
	.then(results => res.send(results))
	.catch(err => res.status(500).send(err))
}