import CountdownBanner from "../CountdownBanner/CountdownBanner";
import MainLayout from "../Layout/Layout";
import styles from "./styles.module.scss";

function ListProducts() {
  const { container, containerItem } = styles;
  return (
    <MainLayout>
      <div className={container}>
        <CountdownBanner />
        <div className={containerItem}>
          <div>1</div>
          <div>2</div>
        </div>
      </div>
    </MainLayout>
  );
}

export default ListProducts;
