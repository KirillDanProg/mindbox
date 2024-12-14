import { Button } from "@/shared/components/ui/button";

type ClearCompletedTodosProps = {
  clearTodos: () => void;
};

const ClearCompletedTodos = (props: ClearCompletedTodosProps) => {
  const { clearTodos } = props;

  const onClearHandler = () => {
    clearTodos();
  };

  return <Button onClick={onClearHandler}>Clear completed</Button>;
};

export default ClearCompletedTodos;
