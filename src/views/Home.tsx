import { observer } from "mobx-react";
import counterStore from "../stores/CounterStore";

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
        <div>
          <div>{counterStore.counter}</div>
          <div>
            <button onClick={counterStore.increment}>+</button>
            <button onClick={counterStore.decrement}>-</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default observer(Home);
