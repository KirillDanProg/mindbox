import type { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { setupStore, type RootState } from "../store";

type StoreProviderProps = PropsWithChildren & {
  preloadedState?: Partial<RootState>;
};

const StoreProvider = (props: StoreProviderProps) => {
  const { children, preloadedState } = props;
  const store = setupStore(preloadedState);

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
