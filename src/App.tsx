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
import HomePage from './page/home';
import Header from './components/client/header.client';
import Footer from './components/client/footer.client';
import LayoutApp from './components/share/layout.app';


const LayoutClient = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const rootRef = useRef<HTMLDivElement>(null);
 
  useEffect(() => {
    if (rootRef && rootRef.current) {
      rootRef.current.scrollIntoView({ behavior: 'smooth' });
    }

  }, [location]);

  return (
    <div className='layout-app' ref={rootRef}>
      {/* <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
      <Header />
      <div className={styles['content-app']}>
        {/* <Outlet context={[searchTerm, setSearchTerm]} /> */}
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutApp> <LayoutClient /></LayoutApp>,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <HomePage /> },
        

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

