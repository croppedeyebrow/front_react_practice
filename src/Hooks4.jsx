//useMemo : 컴포넌트의 성능을 최적화하기 위해 사용, 이전에 계산한 값을 재사용 한다는 의미

import { useState, useMemo } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중");
  //두개의 입력값을 입력 받아 하나의 결과값으로 만들고 다음의 요소 연산.
  if (numbers.length === 0) return 0;

  //반어함수, 불필요한 계산 방지.

  // 배열의 각 요소를 순회하며 callback 함수의 실행 값을 누적하여 하나의 결과값을 반환 합니다.
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};
//리엑트는 리렌더링 시 마다, 변수가 초기화되기 때문에,
//이를 막기 위해서 usememo를 사용/
const Average = () => {
  // 컴포넌트 이름은 대문자
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const onInsert = (e) => {
    if (isNaN(parseInt(number))) return 0;
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값 : </b> {getAverage(list)}
      </div>
    </div>
  );
};
export default Average;
