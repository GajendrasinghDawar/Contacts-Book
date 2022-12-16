import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";


import Root, { loader as rootLoader, action as rootAction } from "./components/root";
import ErrorPage from "./error-page";
import Contact, {
    loader as contactLoader,
    action as contactAction,
} from "./routes/contact";
import EditContact, {
    action as editAction,
} from "./routes/edit";
import {
    action as createAction,
} from "./routes/create";
import NewContact from "./routes/create";
import { action as destroyAction } from "./routes/destroy";
import Index from "./routes/index";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        loader: rootLoader,
        action: rootAction,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    { index: true, element: <Index /> },
                    {
                        path: "contacts/create",
                        element: <NewContact />,
                        action: createAction,
                    },
                    {
                        path: "contacts/:contactId",
                        element: <Contact />,
                        loader: contactLoader,
                        action: contactAction,
                    },

                    {
                        path: "contacts/:contactId/edit",
                        element: <EditContact />,
                        loader: contactLoader,
                        action: editAction,
                    },
                    {
                        path: "contacts/:contactId/destroy",
                        action: destroyAction,
                        errorElement: <div>Oops! There was an error.</div>
                    },
                ],
            }
        ]
    },
]);

export default router