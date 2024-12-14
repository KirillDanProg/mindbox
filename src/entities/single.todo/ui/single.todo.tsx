type SingleTodoProps = {
  title: string;
  isDone: boolean;
};

const SingleTodo = (props: SingleTodoProps) => {
  const { title, isDone } = props;

  return (
    <div>
      <div>{title}</div>
      <div>{isDone}</div>
    </div>
  );
};

export default SingleTodo;
