import type { SingleTodoType } from "@/entities/single.todo";

/**
 * Функция находит задачу по идентификатору и реверсит ее значение isDone
 * @param {string} todoId - Идентификатор задачи
 * @param {SingleTodoType[]} todos - Текущий список задач
 * @returns {SingleTodoType[]} - Измененный список задач
 */
export const mapTodos = (
  todoId: number,
  todos: SingleTodoType[]
): SingleTodoType[] =>
  todos.map((todo) => {
    return todo.id === todoId ? { ...todo, isDone: !todo.isDone } : todo;
  });
