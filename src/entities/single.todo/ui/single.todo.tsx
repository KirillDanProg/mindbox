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
    <label className="flex items-center gap-2 cursor-pointer">
      <Checkbox
        checked={isDone}
        onCheckedChange={() => {
          onCompletedChange(id);
        }}
        className="rounded-full size-6"
      />
      <div className="text-2xl font-thin self-center">{title}</div>
    </label>
  );
};

export default SingleTodo;
