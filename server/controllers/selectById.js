import { Task } from '../models';

const response_builder = data => {
	if(!data[0]) data[0] = {};
	
	let response = {
		status: Object.values(data[0]).length >= 1 ? "200" : "401",
		data: {
			id: data[0].id ? data[0].id : 0,
			title: data[0].title ? data[0].title : "",
			description: data[0].description ? data[0].description : ""
		},
		links: [
		{
			rel: `/linkrels/tasks/${data[0].id}/${data[0].done ? "un" : ""}done`,
			uri: `/tasks/${data[0].id}/${data[0].done ? "un" : ""}done`
		},
		{
			rel: `/linkrels/tasks/${data[0].id}/${
				data[0].delete ? "un" : ""
			}delete`,
			uri: `/tasks/${data[0].id}/${data[0].delete ? "un" : ""}delete`
		}
		]
	};
	return response;
};

export default function(req, res, next) {
	Task.getById(req.params.id)	
	.then(tasks => res.send(response_builder(tasks)))
	.catch(err => res.send(err))
}