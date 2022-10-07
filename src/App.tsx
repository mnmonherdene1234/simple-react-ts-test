import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [data, setData] = useState<string[] | never>([]);
  const inputRef = useRef<any>();

  const onAdd = () => {
    const added: string[] = [...data, inputRef.current.value ?? "emty"];
    setData(added);
    localStorage.setItem("list", JSON.stringify(added));
  };

  useEffect(() => {
    const stringList: string | null = localStorage.getItem("list");
    if (stringList) setData(JSON.parse(stringList));
  }, []);

  return (
    <div className="App">
      <Link to="/fetch">
        <div>Fetch</div>
      </Link>
      <input ref={inputRef}></input>
      <button onClick={() => onAdd()}>add</button>
      <div>
        {data.map((e, i) => (
          <p key={i}>{e}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
