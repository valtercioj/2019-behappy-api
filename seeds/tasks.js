
exports.seed = function(knex, Promise) {
  return knex('tasks').del()
    .then(function () {
      return knex('tasks').insert([
        {title: 'Ligação', description: 'Você ligou para seus amigos há 44 dias'},
        {title: 'Zap', description: 'no zap zap zap zap'},
        {title: 'Bom dia', description: 'Mandou a true pro clan'}
      ]);
    });
};
