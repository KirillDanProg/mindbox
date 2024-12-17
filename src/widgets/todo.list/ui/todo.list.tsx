import { SingleTodo, type SingleTodoType } from "@/entities/single.todo";
import { TodosLeftCount } from "@/entities/todos.left.count";
import { AddSingleTodo } from "@/features/add.single.todo";
import { ClearCompletedTodos } from "@/features/clear.todos";
import { useState } from "react";
import { TodosFilter } from "@/features/filter.todos";
import type { FilterTabsType } from "@/entities/todos.filter.tab";
import { useTodos } from "../lib/hooks/use.todos";

type TodoListProps = {
  initTodos?: SingleTodoType[];
};

const TodoList = (props: TodoListProps) => {
  const { initTodos = [] } = props;

  const { todos, addTodoHandler, onCompletedHandler, clearTodosHandler } = useTodos(initTodos);

  const [activeTab, setActiveTab] = useState<FilterTabsType>("all");

  const filteredTodos =
    activeTab === "all"
      ? todos
      : todos.filter(({ isDone }) => {
          return activeTab === "active" ? !isDone : isDone;
        });

  const itemsLeftCount = filteredTodos.length;
  const isClearCompletedDisabled = !filteredTodos.length || !filteredTodos.some(todo => todo.isDone);

  const onFilterHandler = (tabKey: FilterTabsType) => {
    setActiveTab(tabKey);
  };

  return (
    <div
      className="max-h-[80vh] relative overflow-y-scroll container flex flex-col max-w-lg bg-white shadow-md"
      data-testid="todo-list"
    >
      <div className="sticky top-0 bg-background">
        <AddSingleTodo addTodo={addTodoHandler} />
      </div>

      <div>
        {filteredTodos.map(todo => (
          <SingleTodo key={todo.id} todo={todo} onCompletedChange={onCompletedHandler} />
        ))}
      </div>

      <div className="sticky bottom-0 bg-background flex flex-col sm:flex-row items-center justify-between text-muted font-thin py-1 px-2">
        <TodosLeftCount count={itemsLeftCount} />
        <TodosFilter activeTab={activeTab} onFilterCallback={onFilterHandler} />
        <ClearCompletedTodos clearTodos={clearTodosHandler} disabled={isClearCompletedDisabled} />
      </div>
    </div>
  );
};

export default TodoList;
