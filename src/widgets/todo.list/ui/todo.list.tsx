import { SingleTodo, type SingleTodoType } from "@/entities/single.todo";
import { FILTER_TABS, type FilterTabsType } from "@/entities/todos.filter.tab";
import TodosFilterTab from "@/entities/todos.filter.tab/ui/todos.filter.tab";
import { TodosLeftCount } from "@/entities/todos.left.count";
import { AddSingleTodo } from "@/features/add.single.todo";
import { ClearCompletedTodos } from "@/features/clear.todos";
import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState<SingleTodoType[]>([]);

  const addTodo = () => {
    return;
  };

  const clearTodos = () => {
    return;
  };

  const onFilterHandler = () => {
    return;
  };

  return (
    <div>
      <AddSingleTodo addTodo={addTodo} />

      {todos.map(({ id, title, isDone }) => (
        <SingleTodo key={id} title={title} isDone={isDone} />
      ))}

      <div>
        <TodosLeftCount count={2} />

        {Object.keys(FILTER_TABS).map((tabKey, index) => {
          return (
            <TodosFilterTab
              key={`${tabKey}${index}`}
              tabKey={tabKey as FilterTabsType}
              callback={onFilterHandler}
            />
          );
        })}

        <ClearCompletedTodos clearTodos={clearTodos} />
      </div>
    </div>
  );
};

export default TodoList;
