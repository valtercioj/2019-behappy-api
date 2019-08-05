import express from 'express';
const router = express.Router();

// routes
router.get('/', function(req, res, next) {
	res.send({
		version: "0.0.1",
		title: "API do App Lista de tarefas"
	});
});

export default router;