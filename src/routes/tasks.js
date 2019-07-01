import knex from "../config/knex";

const tasks = {
    method: "GET",
    path: "/tasks",
    handler: (request, reply) => (
        knex
            .from('tasks')
            .select('title', 'description')
            .then(results => reply.response(results))
            .catch(err => console.log(err)))
  };

  export default tasks;
