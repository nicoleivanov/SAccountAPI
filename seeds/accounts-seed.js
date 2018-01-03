exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('accounts')
    .del()
    .then(function() {
      // Inserts seed entries
      let date = new Date();
      return knex('accounts').insert([
        { id: 1, name: 'Harry', launch_date: date },
        { id: 2, name: 'Ron', launch_date: date },
        { id: 3, name: 'Hermione', launch_date: date },
      ]);
    });
};
