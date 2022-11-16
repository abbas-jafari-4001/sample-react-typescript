import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home";
import NoPage from "../pages/NoPage";
import SingleImage from "../components/Image";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NoPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                children: [
                    {
                        path: "/:term",
                        element: <Home />,
                    },
                ],
            },
            {
                path: "image/:imageId",
                element: <SingleImage />,
            },
        ],
    },
]);

const App = () => <RouterProvider router={router} />;
export default App;
