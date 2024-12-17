import type { SingleTodoType } from "@/entities/single.todo";
import { transformTitle } from "@/shared/lib/utils/transform.title/transform.title";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import { mapTodos } from "../utils/map.todos";

type UseTodosReturnType = {
  todos: SingleTodoType[];
  addTodoHandler: (newTodoTitle: string) => void;
  onCompletedHandler: (todoId: number) => void;
  clearTodosHandler: () => void;
};

export const useTodos = (initTodos: SingleTodoType[] = []): UseTodosReturnType => {
  const [todos, setTodos] = useState(initTodos);

  const addTodoHandler = (newTodoTitle: string) => {
    const transformedTitle = transformTitle(newTodoTitle);

    if (!transformedTitle) {
      return;
    }

    if (todos.length >= 20) {
      enqueueSnackbar("Max limit todos reached", {
        variant: "warning",
        preventDuplicate: true,
      });
      return;
    }

    const newTodo: SingleTodoType = {
      id: Date.now(),
      title: transformedTitle,
      isDone: false,
    };

    setTodos(prev => [newTodo, ...prev]);
  };

  const onCompletedHandler = (todoId: number) => {
    setTodos(prev => mapTodos(todoId, prev));
  };

  const clearTodosHandler = () => {
    setTodos(prev => prev.filter(todo => !todo.isDone));
  };

  return {
    todos,
    addTodoHandler,
    onCompletedHandler,
    clearTodosHandler,
  };
};
