
exports.up = function(knex, Promise) {
  return knex.schema.createTable('entries', function(table) {
  	table.increments('id').unsigned().primary();
  	table.dateTime('createdAt').notNull();
  	table.dateTime('updatedAt').nullable();
  	table.dateTime('deletedAt').nullable();

  	table.text('content').notNull();
    table.integer('order').notNull();
  	table.integer('userId')
  		.unsigned()
  		.notNull()
  		.references('id')
  		.inTable('users')
  		.onDelete('CASCADE');
  	table.integer('storyId')
  		.unsigned()
  		.notNull()
  		.references('id')
  		.inTable('stories')
  		.onDelete('CASCADE');	
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('entries');
};
