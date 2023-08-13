import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true,
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true
    },
    {
        path: '/product',
        page: ProductsPage,
        isShowHeader:true
    },
    {
        path: '*', //khi trỏ sai đường dẫn sẽ trả về not fount
        page: NotFoundPage

    }
]
