import axios from "axios";
import { useEffect, useState } from "react";
import { IMy } from "./types/type";

const App = () => {
  const [value, setValue] = useState<string>("");
  const [ToDo, setToDo] = useState<IMy[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  console.log(ToDo);

  const getData = async () => {
    try {
      let { data } = await axios.get<IMy[]>(
        `https://api-v2.elchocrud.pro/api/v1/213aa36680cc4b6329d75216b3eb85d8/product-v2`
      );
      setToDo(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const postData = async () => {
    try {
      let { data } = await axios.post(
        `https://api-v2.elchocrud.pro/api/v1/213aa36680cc4b6329d75216b3eb85d8/product-v2`,
        {
          title: value,
        }
      );
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <center>
        <div className="">
          <div className="input-container">
            <input
              placeholder="Mar4ik Dev"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="text"
              className="input"
            />
            <span onClick={() => postData()}>Sumbit</span>
          </div>
        </div>
      </center>
      {loading ? (
        <center>
          <h1>Loading</h1>
        </center>
      ) : (
        <div className="">
          {ToDo.map((el, idx) => (
            <div className="">
              <li key={idx}>{el.title}</li>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
