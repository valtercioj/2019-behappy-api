exports.seed = function(knex, Promise) {
  return knex('tasks').del()
    .then(function () {
      return knex('tasks').insert([
        {title: 'Bom dia', deion: 'Você deu bom dia para alguém há 44 dias'},
        {title: 'Ligação', deion: 'Você ligou para seus amigos há 44 dias'},
        {title: 'Zap', deion: 'Envie um zap aos seus amigos em 6 horas'},
      ]);
    });
};
