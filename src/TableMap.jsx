import { useState, useEffect } from "react";
const TableMap = () => {
  const data = [
    { id: 100, name: "카즈하", age: 21 },
    { id: 200, name: "은채", age: 20 },
    { id: 300, name: "채원", age: 22 },
    { id: 400, name: "허윤지", age: 20 },
  ];
  const [mapData, setMapData] = useState("");

  useEffect(() => {
    setMapData(data);
  }, []);

  const tableClickEvent = (item) => {
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
        {mapData &&
          mapData.map((item) => (
            <tr key={item.id} onClick={() => tableClickEvent(item)}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TableMap;
