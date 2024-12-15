import { describe, test, expect } from "vitest";
import { render, within } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import TodoList from "./todo.list";
import type { SingleTodoType } from "@/entities/single.todo";
import { FILTER_TABS } from "@/entities/todos.filter.tab";

describe("TodoList", () => {
  const { getByTestId } = render(<TodoList />);
  const element = getByTestId("todo-list");

  test("should render TodoList", () => {
    expect(element).toBeInTheDocument();
  });

  test("should add new todo", async () => {
    const newTodoTitle = "new todo";

    const { getByTestId, getByText } = render(<TodoList />);

    const input = getByTestId("add-todo-input");

    expect(input).toBeInTheDocument();

    const user = userEvent.setup();

    await user.type(input, `${newTodoTitle}`);
    expect(input).toHaveValue(newTodoTitle);

    await user.type(input, "[Enter]");
    expect(input).toHaveValue("");

    expect(getByText(/new todo/i)).toBeInTheDocument();
  });

  test("should clear completed todos", async () => {
    const { getByTestId, getByText } = render(
      <TodoList initTodos={mockedTodos} />
    );

    const todoOne = getByTestId(`single-todo-${mockedTodos[0].id}`);
    const todoTwo = getByTestId(`single-todo-${mockedTodos[1].id}`);
    const clearButton = getByText(/clear completed/i);

    expect(todoOne).toBeInTheDocument();
    expect(todoTwo).toBeInTheDocument();
    expect(clearButton).toBeInTheDocument();

    const user = userEvent.setup();

    await user.click(clearButton);

    expect(todoOne).not.toBeInTheDocument();
    expect(todoTwo).toBeInTheDocument();
  });

  test("should show filtered todos", async () => {
    const todoOneTestId = `single-todo-${mockedTodos[0].id}`;
    const todoTwoTestId = `single-todo-${mockedTodos[1].id}`;

    const { getByTestId, queryByTestId } = render(
      <TodoList initTodos={mockedTodos} />
    );

    expect(getByTestId(todoOneTestId)).toBeInTheDocument();
    expect(getByTestId(todoTwoTestId)).toBeInTheDocument();

    const user = userEvent.setup();

    const showActive = getByTestId(`tab-${FILTER_TABS.active}`);
    await user.click(showActive);

    expect(queryByTestId(todoOneTestId)).not.toBeInTheDocument();
    expect(queryByTestId(todoTwoTestId)).toBeInTheDocument();

    const showCompleted = getByTestId(`tab-${FILTER_TABS.completed}`);
    await user.click(showCompleted);

    expect(queryByTestId(todoOneTestId)).toBeInTheDocument();
    expect(queryByTestId(todoTwoTestId)).not.toBeInTheDocument();

    const showAll = getByTestId(`tab-${FILTER_TABS.all}`);
    await user.click(showAll);

    expect(queryByTestId(todoOneTestId)).toBeInTheDocument();
    expect(queryByTestId(todoTwoTestId)).toBeInTheDocument();
  });

  test("should change todo to active", async () => {
    const { getByTestId, queryByTestId } = render(
      <TodoList initTodos={mockedTodos} />
    );

    const todoOneTestId = `single-todo-${mockedTodos[0].id}`;
    const showActive = getByTestId(`tab-${FILTER_TABS.active}`);
    const showAll = getByTestId(`tab-${FILTER_TABS.all}`);

    const user = userEvent.setup();

    await user.click(showActive);
    expect(queryByTestId(todoOneTestId)).not.toBeInTheDocument();

    await user.click(showAll);
    const todoOne = getByTestId(todoOneTestId);
    const { getByRole } = within(todoOne);

    expect(todoOne).toBeInTheDocument();
    expect(getByRole("checkbox")).toBeChecked();

    await user.click(todoOne);
    await user.click(showActive);

    expect(getByRole("checkbox")).not.toBeChecked();
    expect(queryByTestId(todoOneTestId)).toBeInTheDocument();
  });

  test("should show items left count", () => {
    const { getByText, unmount } = render(<TodoList />);
    expect(getByText(/items left/i)).toHaveTextContent("0");

    const leftCountElement = getByText(/items left/i);

    expect(leftCountElement).toBeInTheDocument();
    expect(leftCountElement).toHaveTextContent("0");

    unmount();
    render(<TodoList initTodos={mockedTodos} />);
    expect(getByText(/items left/i)).toHaveTextContent(`${mockedTodos.length}`);
  });
});

const mockedTodos: SingleTodoType[] = [
  { id: 1, title: "todo one", isDone: true },
  { id: 2, title: "todo two", isDone: false },
];
