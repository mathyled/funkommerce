import Chart from "../../PanelHome/Chart/Chart";
import styles from "./PageHome.module.css";
import { userData } from "../../PanelHome/data";
// import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
// import WidgetSm from "../../components/widgetSm/WidgetSm";
// import WidgetLg from "../../components/widgetLg/WidgetLg";

export default function PageHome() {
  return (
    <div className={styles.home}>
      {/* <FeaturedInfo /> */}
      <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
      <div className={styles.homeWidgets}>
        {/* <WidgetSm />
        <WidgetLg /> */}
      </div>
    </div>
  );
}
