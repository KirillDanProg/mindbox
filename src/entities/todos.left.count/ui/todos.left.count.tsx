type TodosLeftCountProps = {
  count: number;
};

const TodosLeftCount = (props: TodosLeftCountProps) => {
  const { count } = props;

  return <div>{`${count} items left`}</div>;
};

export default TodosLeftCount;
