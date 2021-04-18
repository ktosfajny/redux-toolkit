import { RootState } from "app/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export interface TetProps {}

const Tet: React.FC<TetProps> = () => {
  const wynik = useSelector((state: RootState) => state.counter.value);
  useEffect(() => {
    console.log("renderuje się Tet");
  }, []);

  return <div>wynik większy od 10? {wynik > 10 && "tak"}</div>;
};

export default Tet;
