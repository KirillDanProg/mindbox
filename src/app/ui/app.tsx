import { TodosPage } from "@/pages/todos";

const App = () => {
  return (
    <div className="flex flex-col align-center min-h-screen p-4 text-center bg-gray-200 ">
      <h1 className="font-thin text-8xl text-red-900 opacity-20">todos</h1>
      <TodosPage />
    </div>
  );
};
export default App;
