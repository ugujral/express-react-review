const todoList = ['one', 'two', 'three'];

const controller = {
  get: (req, res) => {
    res.status(200).send(todoList);
  },
  post: (req, res) => {
    const { todo } = req.body;
    if (todo !== '') {
      todoList.push(todo);
    }
    res.status(201).send(todoList);
  },
  delete: (req, res) => {
    res.send('hello from delete');
  },
};

module.exports = controller;
