import React, { ChangeEvent, useDeferredValue, useMemo, useState, useTransition } from "react";
import { photos } from "./photos";

const Concurrency: React.FC = () => {
  const [value, setValue] = useState("");
  const [num, setNum] = useState(0);
  const [isPending, startTransition] = useTransition();
  const deffered = useDeferredValue(value)

  const filteredData = useMemo(() => {
    console.log("render");
    return photos.filter((photo) =>
      photo.title.toLocaleLowerCase().includes(value)
    );
  }, [deffered]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
        setValue(e.target.value);
    })
  };

  const changeNumber = () => {
    setNum((prev) => prev + 1);
  };

  return (
    <div>
      <div>
        <h1>{num}</h1>
        <button onClick={changeNumber}>Button</button>
      </div>
      <div>
        <input type="text" onChange={onChangeHandler} />
      </div>
      {isPending && <h1>loading . . .</h1>}
      {filteredData.map(({ id, title, url }) => (
        <div key={id}>
          <h1>{title}</h1>
          <h2>{url}</h2>
        </div>
      ))}
    </div>
  );
};

export default Concurrency;
