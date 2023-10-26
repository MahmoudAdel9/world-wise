import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Cityitem from "./CityItem";
import Message from "./Message";
import { useCities } from "../context/CitiesContext";

function CityList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;
  if (cities.length === 0) return <Message message={"Add A City"} />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <Cityitem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
