import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// useAppDispatch sẽ trả về một hàm dispatch với kiểu AppDispatch.
export const useAppDispatch: () => AppDispatch = useDispatch;  

// TypedUseSelectorHook<RootState> đảm bảo rằng selector function sẽ nhận RootState làm tham số.
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;



/*
  // thay cho useDispatch và useSelecter để TS có thể sử dụng
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();
*/







