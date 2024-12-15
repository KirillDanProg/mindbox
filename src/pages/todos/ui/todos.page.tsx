import { TodoList } from "@/widgets/todo.list";

const TodosPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h1 className="font-thin text-8xl text-red-900 opacity-20">todos</h1>
      <TodoList />
    </div>
  );
};

export default TodosPage;
