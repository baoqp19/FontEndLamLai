import { StrictMode } from 'react'
import ReactDom from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import LoginPage from './page/auth/login';
import RegisterPage from './page/auth/register';


ReactDom.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
  </StrictMode>,
)



