import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Components/Card";
import Button from "./Components/Button";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    );

    setUserData(response.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printUserdata = (
    <h3 className="text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold">
      Loading...
    </h3>
  );
  if (userData.length > 0) {
    printUserdata = userData.map((elem, idx) => {
      return (
        <div key={idx}>
          <Card elem={elem} />
        </div>
      );
    });
  }

  return (
    <div className="bg-black overflow-auto h-screen p-4 text-white">
      <div className="flex flex-wrap h-[82%] gap-4 p-2">{printUserdata}</div>

      <Button index={index} setIndex={setIndex} setUserData={setUserData}/>
    </div>
  );
};

export default App;
