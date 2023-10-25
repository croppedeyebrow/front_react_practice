import React from "react";

const Table = () => {
  const data = [
    { id: 1, name: "이재성", age: 30 },
    { id: 2, name: "김현빈", age: 24 },
    { id: 3, name: "문지예", age: 30 },
    { id: 4, name: "김지은", age: 28 },
    { id: 5, name: "장현준", age: 29 },
  ];

  const handleTableRowClick = (item) => {
    console.log(item);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>이름</th>
          <th>나이</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} onClick={() => handleTableRowClick(item)}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
