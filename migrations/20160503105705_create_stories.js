
exports.up = function(knex, Promise) {
  return knex.schema.createTable('stories', function(table) {
  	table.increments('id').unsigned().primary();
  	table.dateTime('createdAt').notNull();
  	table.dateTime('updatedAt').nullable();
  	table.dateTime('deletedAt').nullable();

  	table.string('title').notNull();
  	table.string('coverImage').notNull();
  	table.integer('userId')
  		.unsigned()
  		.notNull()
  		.references('id')
  		.inTable('users')
  		.onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('stories');
};
