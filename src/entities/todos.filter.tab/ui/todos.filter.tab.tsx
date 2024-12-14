import { FILTER_TABS, type FilterTabsType } from "../model/types/filter.values";

type TodosFilterTabProps = {
  tabKey: FilterTabsType;
  activeTab: FilterTabsType;
  callback: (value: FilterTabsType) => void;
};

const TodosFilterTab = (props: TodosFilterTabProps) => {
  const { tabKey, activeTab, callback } = props;

  const onClickHandler = () => {
    callback(tabKey);
  };

  const isActive = tabKey === activeTab;

  return (
    <div
      className={`cursor-pointer px-2 rounded-sm border ${
        isActive ? "border-red-100" : "border-transparent"
      } `}
      onClick={onClickHandler}
    >{`${FILTER_TABS[tabKey]}`}</div>
  );
};

export default TodosFilterTab;
