import express from "express";
import { writeFile, readFile } from "node:fs/promises";
import bodyParser from "body-parser";
import { nanoid } from "nanoid";
import cors from "cors";

const app = express();

// Middleware para parsear el cuerpo de las peticiones
app.use(bodyParser.json());

// <--- Habilitamos CORS
app.use(cors());

// Función para obtener los todos
const getTodos = async () => {
  const fsResponse = await readFile("todos.json", "utf-8");
  const todos = JSON.parse(fsResponse);
  return todos;
};

app.get("/todos", async (req, res) => {
  const todos = await getTodos(); // <--- Obtenemos los todos
  res.json(todos);
});

app.get("/todos/:id", async (req, res) => {
  const id = req.params.id;
  const todos = await getTodos(); // <--- Obtenemos los todos
  const todo = todos.find((todo) => todo.id === id);

  if (!todo) {
    res.status(404).json({ message: "Todo not found" });
  }
  res.json(todo);
});

//POST
app.post("/todos", async (req, res) => {
  const { title } = req.body;
  const newTodo = {
    id: nanoid(),
    title,
    done: false,
  };
  let todos = await getTodos();
  todos.push(newTodo);
  await writeFile("todos.json", JSON.stringify(todos));
  res.status(201).json(newTodo);
});

//PUT
app.put("/todos/:id", async (req, res) => {
  const id = req.params.id;

  let todos = await getTodos();
  const todo = todos.find((todo) => todo.id === id);

  if (!todo) {
    res.status(404).json({ message: "Todo not found" });
  }

  todos = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, done: !todo.done };
    }
    return todo;
  });

  await writeFile("todos.json", JSON.stringify(todos));

  res.json(todos);
});

//DELETE
app.delete("/todos/:id", async (req, res) => {
  const id = req.params.id;

  let todos = await getTodos();
  const todo = todos.find((todo) => todo.id === id);

  if (!todo) {
    res.status(404).json({ message: "Todo not found" });
  }

  todos = todos.filter((todo) => todo.id !== id);

  await writeFile("todos.json", JSON.stringify(todos));
  res.json(todos);
});

app.listen(5000, () => {
  console.log("Example app listening on port 5000");
});
