import knex from "../config/knex";
import { EILSEQ } from "constants";

const table_name = "tasks";

class Task {
    static insert(data){
        return knex("tasks")
        .insert(data);
    }

    static deleteById(id){
        return knex
        .from("tasks")
        .where("oid", id)
        .del();
    }

    static getAll() {
        return knex
        .from(table_name)
        .select()
        .then(results => Task.deserialize(results))
        .catch(err => err);
    }

    static getById(id) {
        return knex(table_name)
        .where("id", id)
        .select()
        .then(results => Task.deserialize(results))
        .catch(err => err);
    }

    static undone(id) {
        return knex(table_name)
        .where("id", id)
        .andWhere("done", true)
        .update("done", false)
        .then(tasks_updated => {
            if (tasks_updated > 0) return Task.getById(id);
            else return [];
        });
    }

    static done(id) {
        return knex(table_name)
        .where("id", id)
        .andWhere("done", false)
        .update("done", true)
    }

    static deserialize(json) {
        return json.map(data => {
            let task = new Task();
            task.id = data.id ? data.id : 0;
            task.title = data.title ? data.title : "";
            task.description = data.description ? data.description : "";
            task.done = data.done ? true : false;
            task.delete = data.delete ? data.delete : false;
            return task;
        });
    }
}

export default Task;