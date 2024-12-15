import { SingleTodo, type SingleTodoType } from "@/entities/single.todo";
import { TodosLeftCount } from "@/entities/todos.left.count";
import { AddSingleTodo } from "@/features/add.single.todo";
import { ClearCompletedTodos } from "@/features/clear.todos";
import { useState } from "react";
import { TodosFilter } from "@/features/filter.todos";
import type { FilterTabsType } from "@/entities/todos.filter.tab";
import { transformTitle } from "@/shared/lib/utils/transform.title/transform.title";
import { mapTodos } from "../lib/utils/map.todos";

type TodoListProps = {
  initTodos?: SingleTodoType[];
};

const TodoList = (props: TodoListProps) => {
  const { initTodos = [] } = props;

  const [todos, setTodos] = useState(initTodos);
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
    const transformedTitle = transformTitle(newTodoTitle);

    if (!transformedTitle) {
      return;
    }

    const newTodo: SingleTodoType = {
      id: Date.now(),
      title: transformedTitle,
      isDone: false,
    };

    setTodos((prev) => [newTodo, ...prev]);
  };

  const onCompletedHandler = (todoId: number) => {
    setTodos((prev) => mapTodos(todoId, prev));
  };

  const clearTodosHandler = () => {
    setTodos((prev) => prev.filter((todo) => !todo.isDone));
  };

  const onFilterHandler = (tabKey: FilterTabsType) => {
    setActiveTab(tabKey);
  };

  return (
    <div
      className="container flex flex-col max-w-lg bg-white p-4 shadow-md gap-4"
      data-testid="todo-list"
    >
      <AddSingleTodo addTodo={addTodoHandler} />

      {filteredTodos.map((todo) => (
        <SingleTodo
          key={todo.id}
          todo={todo}
          onCompletedChange={onCompletedHandler}
        />
      ))}

      <div className="flex flex-col sm:flex-row items-center justify-between text-muted font-thin">
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
