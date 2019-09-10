import { exportAllDeclaration } from "@babel/types";
import { CounterStore } from "@/store/modules/counter.vuex";

describe("CounterStore", (): void => {
  const counter = new CounterStore();

  test("default count", () => {
    expect(counter.count).toBe(0);
  });

  test("increment count", () => {
    counter.increment();
    counter.increment();
    expect(counter.count).toBe(2);
  });

  test("decrement count", () => {
    counter.decrement();
    expect(counter.count).toBe(1);
  });
});
