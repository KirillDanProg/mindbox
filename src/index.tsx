import { createRoot } from "react-dom/client";
import App from "./app/ui/app";

const root = createRoot(document.getElementById("root") as HTMLDivElement);

root.render(<App />);
