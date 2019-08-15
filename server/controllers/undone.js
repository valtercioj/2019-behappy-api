import { Task } from '../models';

const response_builder = data => {
	let response = {};
	console.log(data)
	if(!data[0]) data[0] = {};
	if (Object.values(data[0]).length > 0)
    response = {
      status: "200",
      data: {
        id: data[0].id ? data[0].id : 0,
        title: data[0].title ? data[0].title : "",
        description: data[0].description ? data[0].description : ""
      },
      links: [
        {
          rel: `/linkrels/tasks/${data[0].id}/undone`,
          uri: `/tasks/${data[0].id}/undone`
        }
      ]
    };
	else
	response = {
		status: "406",
		data: "Gentileza não foi marcada como feita"
	};
	return response;
}

const response_code_builder = data => (data.length > 0 ? 200 : 406);

export default function(req, res, next) {
	Task.undone(req.params.id)	
	.then(data =>
		res
		.status(response_code_builder(data))
		.send(response_builder(data)))
	.catch(err => res.send(err))
}