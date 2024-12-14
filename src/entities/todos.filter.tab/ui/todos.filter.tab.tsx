import { FILTER_TABS, type FilterTabsType } from "../model/types/filter.values";

type TodosFilterTabProps = {
  tabKey: FilterTabsType;
  callback: (value: FilterTabsType) => void;
};

const TodosFilterTab = (props: TodosFilterTabProps) => {
  const { tabKey, callback } = props;

  const onClickHandler = () => {
    callback(tabKey);
  };

  return <div onClick={onClickHandler}>{`${FILTER_TABS[tabKey]}`}</div>;
};

export default TodosFilterTab;
