import {Action,configureStore,ThunkAction,
  } from '@reduxjs/toolkit';
  import accountReducer from './slice/accountSlice';
  import companyReducer from './slice/companySlide'
  import userReducer from './slice/userSilde'
  import jobReducer from './slice/jobSlide'
  import skillReducer from './slice/skillSlide'
  import resumeReducer from './slice/resumeSlide'
  import permissionReducer from './slice/permissionSlide'
  import roleReducer from './slice/roleSlide'


  export const store = configureStore({
    reducer: {
      account: accountReducer,
      company: companyReducer,
      user: userReducer,
      job: jobReducer,
      skill: skillReducer,
      resume: resumeReducer,
      permission: permissionReducer,
      role: roleReducer,
    },
  });
  
  
  export type AppDispatch = typeof store.dispatch;   // Điều này giúp TypeScript hiểu được các action được dispatch trong ứng dụng.
  export type RootState = ReturnType<typeof store.getState>; // Đây là kiểu dữ liệu cho toàn bộ state của ứng dụng.
  export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType, // void 
    RootState, // State cho toàn bộ ứng dụng 
    unknown,  
    Action<string> // kiểu action cơ bản của redux 
  >;
  