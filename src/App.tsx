import { useGetPokemonByNameQuery } from "./API/pokemonApi";
import useAppDispatch from "./hooks/useAppDispatch";
import { useCounter } from "./hooks/useCounter";
import { QueryValidation } from "./queryValidation";
import { decrement, increment } from "./slices/CounterSlice";

function App() {
  const counter = useCounter();
  const dispatch = useAppDispatch();
  const { data, error, isFetching } = useGetPokemonByNameQuery("bulbasaur");

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <QueryValidation error={error} isLoading={isFetching}>
        {data?.name}
        <img src={data?.sprites.front_default!} alt={data?.name} />
        {data?.weight}
      </QueryValidation>
    </>
  );
}

export default App;