import { SingleTodo, type SingleTodoType } from "@/entities/single.todo";
import { TodosLeftCount } from "@/entities/todos.left.count";
import { AddSingleTodo } from "@/features/add.single.todo";
import { ClearCompletedTodos } from "@/features/clear.todos";
import { useState } from "react";
import { TodosFilter } from "@/features/filter.todos";
import type { FilterTabsType } from "@/entities/todos.filter.tab";

const TodoList = () => {
  const [todos, setTodos] = useState<SingleTodoType[]>([]);
  const [activeTab, setActiveTab] = useState<FilterTabsType>("all");

  const filteredTodos =
    activeTab === "all"
      ? todos
      : todos.filter(({ isDone }) => {
          return activeTab === "active" ? !isDone : isDone;
        });

  const itemsLeftCount = filteredTodos.length;

  const isClearCompletedDisabled =
    !filteredTodos.length || !filteredTodos.some((todo) => todo.isDone);

  const addTodoHandler = (newTodoTitle: string) => {
    const newTodo: SingleTodoType = {
      id: Date.now(),
      title: newTodoTitle,
      isDone: false,
    };

    setTodos((prev) => [newTodo, ...prev]);
  };

  const clearTodosHandler = () => {
    setTodos((prev) => prev.filter((todo) => todo.isDone));
  };

  const onFilterHandler = (tabKey: FilterTabsType) => {
    setActiveTab(tabKey);
  };

  return (
    <div className="container max-w-lg bg-white p-4 shadow-md">
      <AddSingleTodo addTodo={addTodoHandler} />

      {filteredTodos.map(({ id, title, isDone }) => (
        <SingleTodo key={id} title={title} isDone={isDone} />
      ))}

      <div className="flex items-center justify-between text-muted font-thin">
        <TodosLeftCount count={itemsLeftCount} />

        <TodosFilter activeTab={activeTab} onFilterCallback={onFilterHandler} />

        <ClearCompletedTodos
          clearTodos={clearTodosHandler}
          disabled={isClearCompletedDisabled}
        />
      </div>
    </div>
  );
};

export default TodoList;
