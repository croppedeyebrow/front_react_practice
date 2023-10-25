import { useRef } from "react";

const CreateRef = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.disable = false;
    inputRef.current.focus();
  };

  return (
    <>
      <input disabled type="text" ref={inputRef} />
      <button onClick={handleFocus}>활성화</button>
    </>
  );
};

export default CreateRef;
