import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// otypowanie w ten sposób hooków jest dobrą praktyką - nie trzeba za każdym razem ręcznie typować state jako RootState itd
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
