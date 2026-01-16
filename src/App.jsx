import { Provider } from "react-redux";
import { Bounce, ToastContainer } from "react-toastify";
import { createBrowserRouter, RouterProvider } from "react-router";

import Body from "./components/Body";
import { store } from "./store/store";
import Login from "./components/Login";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import GPTSearch from "./components/GPTSearch";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          index: true,
          element: <Login />,
        },
        {
          path: "/browse",
          element: <Browse />,
        },
      ],
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/gpt-search",
      element: <GPTSearch />,
    },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </Provider>
  );
}

export default App;
