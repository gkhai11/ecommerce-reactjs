import AdvancedHeadline from "../AdvancedHeadline/AdvancedHeadline";
import Banner from "../Banner/Banner";
import MyHeader from "../Header/Header";
import Info from "../Info/Info";
import ListProducts from "../ListProducts/ListProducts";
import styles from "./styles.module.scss";

function HomePage() {
  const { container } = styles;
  return (
    <div>
      <div className={container}>
        <MyHeader />
        <Banner />
        <Info />
        <AdvancedHeadline />
        <ListProducts />
      </div>
    </div>
  );
}

export default HomePage;
