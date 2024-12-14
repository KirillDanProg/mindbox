import {
  FILTER_TABS,
  TodosFilterTab,
  type FilterTabsType,
} from "@/entities/todos.filter.tab";
import type { PropsWithChildren } from "react";

type TodosFilterProps = PropsWithChildren & {
  activeTab: FilterTabsType;
  onFilterCallback: (tabKey: FilterTabsType) => void;
};

const TodosFilter = (props: TodosFilterProps) => {
  const { activeTab, onFilterCallback } = props;

  return (
    <div className="flex items-center justify-between space-x-1">
      {Object.keys(FILTER_TABS).map((tabKey, index) => {
        return (
          <TodosFilterTab
            key={`${tabKey}${index}`}
            tabKey={tabKey as FilterTabsType}
            activeTab={activeTab}
            callback={onFilterCallback}
          />
        );
      })}
    </div>
  );
};

export default TodosFilter;
