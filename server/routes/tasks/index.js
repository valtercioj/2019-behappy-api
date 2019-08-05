import express from 'express';
import Joi from "@hapi/joi";
import ExpressJoi from "joi-express";

// Controllers
import t_delete from "./controller/delete.js";
import t_select from "./controller/select.js";
import t_insert from "./controller/insert.js";

// Config
var router = express.Router();
var querySchema = {
    body: {
        title: Joi.string().required(),
        description: Joi.string().required()
    }
};

// Routes
router.get('/', t_select);
router.delete('/:id', t_delete);
router.post('/', ExpressJoi(querySchema), t_insert);

export default router;
