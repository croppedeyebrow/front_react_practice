import { useState } from "react";

const EventHandler = () => {
  const [userName, setUserName] = useState(" ");
  const [message, setMessage] = useState(" ");
  const onChangeUserName = (e) => setUserName(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);
  const onClick = () => {
    alert(userName + " : " + message);
    setUserName("");
    setMessage("");
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") onClick();
  };

  return (
    <>
      <h1>로그인창</h1>
      <input
        type="text"
        placeholder="아이디를 입력하세요."
        value={userName}
        onChange={onChangeUserName}
      />
      <input
        type="text"
        placeholder="비밀번호를 입력하세요."
        value={message}
        onChange={onChangeMessage}
        onKeyDown={onKeyPress}
      />

      <button onClick={onClick}>로그인.</button>
    </>
  );
};

export default EventHandler;
