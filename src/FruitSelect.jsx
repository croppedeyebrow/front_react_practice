import { useState } from "react";

const FruitSelect = () => {
  const [value, setValue] = useState("grape");

  const handelChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    alert("선택한 과일 : " + value);
    e.preventDefault(); //기본 이벤트를 막음
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <label>
        과일을 선택하세요.
        <select value={value} onChange={handelChange}>
          <option value="apple">사과</option>
          <option value="banana">바나나</option>
          <option value="grape">포도</option>
          <option value="watermelon">수박</option>
        </select>
      </label>
      <button type="submit">제출.!</button>
    </form>
  );
};

export default FruitSelect;
