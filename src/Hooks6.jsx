import { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중" + numbers);
  if (numbers.length === 0) return 0;
  // 배열의 각 요소를 순회하며 callback 함수의 실행 값을 누적하여 하나의 결과값을 반환 합니다.
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Averagess = () => {
  // 컴포넌트 이름은 대문자
  const [list, setList] = useState([]);
  const [number, setNumber] = useState(0);
  const inputEl = useRef(null);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); // 빈 배열을 넣으면 처음 렌더링될 때만 함수 호출

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber(0);
    inputEl.current.focus();
  }, [number, list]);

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값 : </b> {avg}
      </div>
    </div>
  );
};
export default Averagess;
