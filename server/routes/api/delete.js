export default function(req, res, next) {
	knex
	.from(table_name)
	.where("oid", req.params.id)
	.del()
    .then(results => 
    	res
    	.status(delete_response_code(results))
    	.send(delete_response(results, req.params.id)))
    .catch(error => console.log(error));
}