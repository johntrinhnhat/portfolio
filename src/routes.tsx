import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./pages/LayOut";

const router = createBrowserRouter([
  {
    path: "/portfolio",
    element: <Layout />,
    children: [{ index: true, element: <Home /> }],
  },
]);

export default router;
