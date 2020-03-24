import React, { useContext } from "react";
import { WinesContext } from "../../context/providers/WinesProvider";
import Wine from "./Wine";

const Wines = () => {
  const wines = useContext(WinesContext);

  return (
    <section className="Wines">
      {wines.map(wine => (
        <Wine {...wine} key={wine.id} />
      ))}
    </section>
  );
};

export default Wines;
