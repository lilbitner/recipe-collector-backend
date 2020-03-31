
exports.up = function(knex) {
    return knex.schema.createTable('users', (user) => {
        user.increments('id')
        user.string('username').notNullable();
        user.string('password_digest').notNullable();
    }).then(() => {
        return knex.schema.createTable('recipes', (recipe) => {
            recipe.increments('id')
            recipe.string('title').notNullable();
            recipe.string('category').notNullable();
            recipe.string('image').notNullable();
            recipe.integer('user_id').references('id').inTable('users')
        })
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("recipes")
    .then(() => {
        return knex.schema.dropTableIfExists('users')
    })
};


