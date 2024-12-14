import { createRoot } from "react-dom/client";
import App from "./app/ui/app";
import StoreProvider from "./app/providers/store.provider/ui/store.provider";

const root = createRoot(document.getElementById("root") as HTMLDivElement);

root.render(
  <StoreProvider>
    <App />
  </StoreProvider>
);
