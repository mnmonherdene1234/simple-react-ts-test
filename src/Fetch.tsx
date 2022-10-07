import { FC, memo, useEffect, useState } from "react";

const Fetch: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any[]>([]);

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const body = await res.json();
    setData(body);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>FETCHING DATA</h1>
      ) : (
        data.map((e, i) => (
          <div key={e.id}>
            <p>Title: {e.title}</p>
            <img src={e.url} />
          </div>
        ))
      )}
    </div>
  );
};

export default memo(Fetch);
