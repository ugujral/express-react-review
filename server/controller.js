const todoList = ['one', 'two', 'three'];

const controller = {
  get: (req, res) => {
    res.status(200).send(todoList);
  },
  post: (req, res) => {
    res.send('hello from post');
  },
  delete: (req, res) => {
    res.send('hello from delete');
  },
};

module.exports = controller;
