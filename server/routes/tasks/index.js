import express from 'express';
import Joi from "@hapi/joi";
import ExpressJoi from "joi-express";

// Controllers
import t_delete from "../../Controllers/delete.js";
import t_select from "../../controllers/select.js";
import t_selectById from "../../controllers/selectById.js";
import t_insert from "../../controllers/insert.js";
import t_done from "../../controllers/done.js";
import t_undone from "../../controllers/undone.js";

// Config
var router = express.Router();
var querySchema = {
    body: {
        title: Joi.string().required(),
        description: Joi.string().required()
    }
};

// select
router.get('/', t_select.bind(this));
router.get('/:id', t_selectById.bind(this));

// delete
router.delete('/:id', t_delete.bind(this));

// insert
router.post('/', ExpressJoi(querySchema), t_insert.bind(this));

// done
router.post('/:id/done', t_done.bind(this));
router.post('/:id/undone', t_undone.bind(this));

export default router;
