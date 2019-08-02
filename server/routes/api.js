import express from 'express';
import knex from '../config/knex';
import Joi from "@hapi/joi";
import ExpressJoi from "joi-express";

var querySchema = {
    body: {
        title: Joi.string().required(),
        description: Joi.string().required()
    }
};

const router = express.Router();
const table_name = "tasks";
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

const delete_response_code = result => (result == 1 ? 200 : 400);

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

/*
* 	@api task
* 	@method delete
*/
router.delete('/:id', function(req, res, next) {
	knex
    .from(table_name)
    .where("oid", req.params.id)
    .del()
    .then(results => res
    	.status(delete_response_code(results))
    	.send(delete_response(results, req.params.id)))
    .catch(error => console.log(error));
});

/*
* 	@api task
* 	@method post
*/
router.post('/', ExpressJoi(querySchema), function(req, res, next) {
    knex(table_name)
      .insert(req.body)
      .then(oid =>
      	res
      	.status(201)
      	.send({
            status: 201,
            task: {
              oid: oid[0],
              title: request.payload.title,
              description: request.payload.description
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
});

export default router;
