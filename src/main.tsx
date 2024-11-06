import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./index.css";
import ErrorPage from './pages/ErrorPage';
import ProductDetail from './pages/ProductDetail/index.tsx';
import { ShoppingCartProvider } from './context/index.tsx';
import Home from './pages/Home/index.tsx';
import Shop from './pages/Shop/Shop.tsx';
import NewArrival from './pages/NewArrival/index.tsx';
import BrandPage from './pages/BrandPage/index.tsx';
import Layout from './components/Layout/index.tsx';
import CartPage from './pages/CartPage/index.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
                
            },
            {
                path: "products/:productId",
                element: <ProductDetail />
        
            },
            {
                path: "shop",
                element: <Shop />
            },
            {
                path: "new-arrivals",
                element: <NewArrival />
            },
            {
                path: "brands",
                element: <BrandPage />
            },
            {
                path: "cart",
                element: <CartPage />
            }
        ],
        errorElement: <ErrorPage/>
    },    
]);

// createRoot(document.getElementById('root')!).render(<App />)
createRoot(document.getElementById('root')!).render(
    <ShoppingCartProvider >
        <RouterProvider router={router} />
    </ShoppingCartProvider>
)
