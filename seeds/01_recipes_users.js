exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, 
        username: 'lilbitner', 
        password_digest: 'lkajdlskjlss'},
      ]);
    }).then(() => {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, 
        user_id: 1,
        title: 'Brownies', 
        category: 'Dessert',
        image: 'https://www.cookingclassy.com/wp-content/uploads/2019/05/brownies-22.jpg'},

        {id: 2, 
        user_id: 1,
        title: 'Lasagna',
        category: 'entree', 
        image: 'https://www.thewholesomedish.com/wp-content/uploads/2018/07/Best-Lasagna-550-500x375.jpg'}
      ]);
    });
};




