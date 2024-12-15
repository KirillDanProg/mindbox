import { Checkbox } from "@/shared/components/ui/checkbox";
import type { SingleTodoType } from "../model/types/single.todo.type";

type SingleTodoProps = {
  todo: SingleTodoType;
  onCompletedChange: (todoId: number) => void;
};

const SingleTodo = (props: SingleTodoProps) => {
  const { todo, onCompletedChange } = props;

  const { id, title, isDone } = todo;

  return (
    <div className="h-12 p-2 first:border-t border-collapse border-b border-gray-200">
      <label
        className="h-full flex items-center gap-4 cursor-pointer"
        data-testid={`single-todo-${id}`}
      >
        <Checkbox
          checked={isDone}
          onCheckedChange={() => {
            onCompletedChange(id);
          }}
          className="rounded-full size-6"
        />
        <div
          className={`text-2xl font-thin self-center ${
            isDone ? "line-through opacity-50" : ""
          }`}
        >
          {title}
        </div>
      </label>
    </div>
  );
};

export default SingleTodo;
