import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx'
import "./index.css";
import Button from './components/Button';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage/>
    },
    {
        path: "boton",
        element: <Button label='Buy Now' bdrRadius='rounded-full' bgColor='bg-black' fontColor='text-white' />
    }
]);

// createRoot(document.getElementById('root')!).render(<App />)
createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
