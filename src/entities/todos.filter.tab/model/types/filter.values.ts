export const FILTER_TABS = {
  all: "All",
  active: "Active",
  completed: "Completed",
} as const;

export type FilterTabsType = keyof typeof FILTER_TABS;
