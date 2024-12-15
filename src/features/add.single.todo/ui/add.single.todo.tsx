import { Input } from "@/shared/components/ui/input";
import {
  useState,
  type ChangeEventHandler,
  type KeyboardEventHandler,
} from "react";

type AddSingleTodoProps = {
  addTodo: (todoTitle: string) => void;
};

const AddSingleTodo = (props: AddSingleTodoProps) => {
  const { addTodo } = props;

  const [value, setValue] = useState("");

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    const test = event.currentTarget.value;
    setValue(test);
  };

  const onEnterHandler: KeyboardEventHandler<HTMLInputElement> = (event) => {
    const isEnterKey = event.key === "Enter";

    if (isEnterKey) {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <Input
      value={value}
      onChange={onChangeHandler}
      onKeyUp={onEnterHandler}
      maxLength={80}
      data-testid="add-todo-input"
    />
  );
};

export default AddSingleTodo;
