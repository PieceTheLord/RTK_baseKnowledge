import useAppSelector from "./useAppSelector";


export const useCounter = () => useAppSelector(state => state.counter.value)