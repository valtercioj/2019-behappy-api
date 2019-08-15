import { Task } from '../models';

export default function(req, res, next) {
	Task.insert(req.body)	
	.then(oid =>
		res
		.status(201)
		.send({
			status: 201,
			task: {
				oid: oid[0],
				title: req.body.title,
				description: req.body.description
			},
			links: [
			{
				rel: `/linkrels/tasks/${oid[0]}/show`,
				uri: `/tasks/${oid[0]}`
			},
			{
				rel: `/linkrels/tasks/${oid[0]}/delete`,
				uri: `/tasks/${oid[0]}`
			},
			{
				rel: `/linkrels/tasks/${oid[0]}/done`,
				uri: `/tasks/${oid[0]}/done`
			}
			]
		})
	)
	.catch(err => res.send(err))
}