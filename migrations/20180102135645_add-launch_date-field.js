exports.up = function(knex, Promise) {
  return knex.schema.table('accounts', function(table) {
    table.dateTime('launch_date');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('accounts', function(table) {
    table.dropColumn('launch_date');
  });
};
