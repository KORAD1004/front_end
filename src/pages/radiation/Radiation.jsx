import RadiationHeader from "../../components/radiation/RadiationHeader.jsx";
import styles from "../../styles/radiation/radiation.module.css";
import Header from "../../components/header/Header.jsx";
import RadiationMap from "../../components/radiation/RadiationMap.jsx";

export default function Radiation() {
  return (
    <>
      <Header />
      <div className={styles.pageWrapper}>
        <RadiationHeader />
        <RadiationMap />
      </div>
    </>
  );
}
