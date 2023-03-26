import { RouterProvider } from "react-router-dom";
import { route } from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </header>
      <main>
        <RouterProvider router={route}></RouterProvider>
      </main>
    </div>
  );
}

export default App;
