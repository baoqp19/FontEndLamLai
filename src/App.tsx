import { useEffect, useRef, useState } from 'react'
import styles from './styles/app.module.scss';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import LoginPage from './page/auth/login';
import RegisterPage from './page/auth/register';
import NotFound from './components/share/not.found';
import HomePage from './page/home/HomePage';
import Header from './components/client/header.client';
import Footer from './components/client/footer.client';
import LayoutApp from './components/share/layout.app';
import ClientJobPage from './page/job/ClientJobPage';
import ClientJobDetailPage from './page/job/DetailJob';
import ClientCompanyPage from './page/company';
import ClientCompanyDetailPage from './page/company/detail';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { fetchAccount } from './redux/slice/accountSlice';




const LayoutClient = () => {
  
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const rootRef = useRef<HTMLDivElement>(null);

  // 1 hàm khi re-render thì lại tạo ra 1 môi trường mới và các giá trị ở trong đó sẽ trở lại ban đầu
  // useRef sinh ra để vẫn giữ được giá trị sau mỗi lần re-render. luôn có current


  useEffect(() => {
    if (rootRef && rootRef.current) {
      rootRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);


  return (
    <div className='layout-app' ref={rootRef}>
      <Header />
      <div className={styles['content-app']}>
        <Outlet context={[searchTerm, setSearchTerm]} />
      </div>
      <Footer />
    </div>
  )
}

export default function App() {

  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.account.isLoading);


  useEffect(() => {
    if (
      window.location.pathname === '/login' || window.location.pathname === '/register'
    )   // khi người dùng đang ở login và register thì không cần gọi để lấy acccount 
      return;
    dispatch(fetchAccount())   // vì lấy account thông qua token nên nó sẽ đăng nhập và lưu rồi 
  }, [])

  const router = createBrowserRouter([
    {
      path: "/",
      element: (<LayoutApp><LayoutClient /></LayoutApp>),   // cái này là chung cho cả / và /job, /company
      errorElement: <NotFound />,
      children: [
        { index: true, element: <HomePage /> },     // nhập / thì hiển thị ra 
        { path: "job", element: <ClientJobPage /> },       
        { path: "job/:id", element: <ClientJobDetailPage /> },
        { path: "company", element: <ClientCompanyPage /> },
        { path: "company/:id", element: <ClientCompanyDetailPage /> }
      ],
    },

    {
      path: "/admin",
      // element: <LayoutAdmin />,
      errorElement: <NotFound />,
      children: [
        // {
        //   index: true, element:
        //     <ProtectedRoute>
        //       <AdminPage />
        //     </ProtectedRoute>
        // },
        // {
        //   path: "user",
        //   element:
        //     <ProtectedRoute>
        //       <ManageUserPage />
        //     </ProtectedRoute>
        //   ,
        // },
      ],
    },

    {
      path: "/login",
      element: <LoginPage />,
    },

    {
      path: "/register",
      element: <RegisterPage />,
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

