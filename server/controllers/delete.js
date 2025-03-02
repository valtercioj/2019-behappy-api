import { Task } from '../models';

const delete_response_code = result => (result == 1 ? 200 : 400);
const delete_response = (result, task_id) => {
	let response = { data: ":D" };
	if (result == 1) {
		response = {
			status: "200",
			data: "Gentileza apagada",
			links: [
			{
				rel: `/linkrels/tasks/${task_id}/undelete`,
				uri: `/tasks/${task_id}/undelete`
			}
			]
		};
	} else {
		response = {
			status: "400",
			data: "No data to delete"
		};
	}
	return response;
};

export default function(req, res, next) {
	Task.deleteById(req.params.id)
	.then(results => {
		res
		.status(delete_response_code(results))
		.send(delete_response(results, req.params.id))
	});
}