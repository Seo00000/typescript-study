import React, {useState} from 'react';

function Counter() {
  // const [count, setCount] = useState<number>(0); 
  // Generics 사용하지 않아도 알아서 타입을 유추하기 때문에 생략 가능.

  /*
  type Todo = { id: number; text: string; done: boolean };
  const [todos, setTodos] = useState<Todo[]>([]);
  // 상태의 타입이 까다로운 구조를 가진 객체이거나 배열일때는 Generics를 명시하는 것이 좋음. 
  // 바로 위 구문처럼 빈 배열만 넣었을 때 해당 배열이 어떤 타입으로 이루어진 배열인지 추론할 수 없기 때문에 해당 타입을 지정해주면 좋음!
  type Todo = { id: number; text: string; done: boolean };
  const [todos, setTodos] = useState([] as Todo[]); // as; Type Assertion, 특정 값이 특정 타입이다는 정보를 덮어쓸 수 있는 문법
  */

  const [count, setCount] = useState(0);
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  )
}

export default Counter;