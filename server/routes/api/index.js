import express from 'express';
import knex from '../../config/knex';
import Joi from "@hapi/joi";
import ExpressJoi from "joi-express";

// Controllers
import t_delete from "./delete.js";
import t_select from "./select.js";
import t_insert from "./insert.js";

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

router.get('/', t_select);
router.delete('/:id', t_delete);
router.post('/', ExpressJoi(querySchema), t_insert);

export default router;
