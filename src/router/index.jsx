import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Todo from "../pages/Todo";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'todo/:id',
                element: <Todo />
            }
        ]
    }
], {
    basename: '/'
})


export default router