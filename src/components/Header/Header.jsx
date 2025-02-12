import BoxIcon from "./BoxIcon/BoxIcon";
import { dataBoxIcon, dataMenu } from "./constants";
import Menu from "./Menu/Menu.jsx";
import styles from "./styles.module.scss";
import Logo from "../../assets/icons/images/Logo-retina.png";
import realoadIcon from "../../assets/icons/svgs/reloadIcon.svg";
import heartIcon from "../../assets/icons/svgs/heart.svg";
import cartIcon from "../../assets/icons/svgs/cartIcon.svg";

function MyHeader() {
  const {
    containerBoxIcon,
    containerMenu,
    containerHeader,
    containerBox,
    container,
  } = styles;
  return (
    <div className={container}>
      <div className={containerHeader}>
        <div className={containerBox}>
          <div className={containerBoxIcon}>
            {dataBoxIcon.map((item) => {
              return <BoxIcon type={item.type} href={item.href} />;
            })}
          </div>
          <div className={containerMenu}>
            {dataMenu.slice(0, 3).map((item) => {
              return <Menu content={item.content} href={item.href} />;
            })}
          </div>
        </div>
        <div>
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "153px", height: "53px" }}
          />
        </div>
        <div className={containerBox}>
          <div className={containerMenu}>
            {dataMenu.slice(3, dataMenu.length).map((item) => {
              return <Menu content={item.content} href={item.href} />;
            })}
          </div>
          <div className={containerBoxIcon}>
            <img width={20} height={20} src={realoadIcon} alt="realoadIcon" />
            <img width={20} height={20} src={heartIcon} alt="heartIcon" />
            <img width={20} height={20} src={cartIcon} alt="cartIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyHeader;
