async function get() {
  return fetch("/api/todos").then(async (todosDoServidor) => {
    const todosString = await todosDoServidor.text();
    const todosFromServer = JSON.parse(todosString).todos;
    return todosFromServer;
  });
}

export const todoController = {
  get,
};
