import { useState } from "react";

function RadioButton() {
  const [selectVal, setSelectVal] = useState("apple");

  function handelChange(e) {
    setSelectVal(e.target.value);
  }

  return (
    <>
      <label htmlFor="apple">
        사과
        <input
          type="radio"
          name="fruits"
          id="apple"
          value="apple"
          onChange={handelChange}
        />
      </label>
      <br />

      <label htmlFor="orange">
        오렌지
        <input
          type="radio"
          name="fruits"
          id="orange"
          value="orange"
          onChange={handelChange}
        />
      </label>

      <br />

      <p>선택된 과일 : {selectVal} </p>
    </>
  );
}

export default RadioButton;
