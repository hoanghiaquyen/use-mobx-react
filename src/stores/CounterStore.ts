import { makeAutoObservable } from "mobx";

class CounterStore {
  counter = 0;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    // autorun(() => console.log("Counter current:", this.counter));
  }

  increment = () => {
    // console.log("increment");
    this.counter++;
  };

  decrement = () => {
    // console.log("decrement");
    this.counter--;
  };
}

export default new CounterStore();
