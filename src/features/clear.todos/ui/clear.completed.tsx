import { Button } from "@/shared/components/ui/button";

type ClearTodosProps = {
  disabled: boolean;
  clearTodos: () => void;
};

const ClearCompletedTodos = (props: ClearTodosProps) => {
  const { disabled, clearTodos } = props;

  const onClearHandler = () => {
    clearTodos();
  };

  return (
    <Button variant="ghost" disabled={disabled} onClick={onClearHandler}>
      Clear completed
    </Button>
  );
};

export default ClearCompletedTodos;
