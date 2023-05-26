import { TypedUseSelectorHook,useDispatch,useSelector } from "react-redux";
import { RootState } from "./StoreAsync";
import { AppDispatch } from "./StoreAsync";
export const useAppSelector:TypedUseSelectorHook <RootState>=useSelector;
export const useAppDispatch:()=>AppDispatch=useDispatch;
