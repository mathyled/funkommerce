import Chart from "../../PanelHome/chart/Chart";
import "./home.css";
import { userData } from "../../PanelHome/data";
// import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
// import WidgetSm from "../../components/widgetSm/WidgetSm";
// import WidgetLg from "../../components/widgetLg/WidgetLg";

export default function Home() {
  return (
    <div className="home">
      {/* <FeaturedInfo /> */}
      <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
      <div className="homeWidgets">
        {/* <WidgetSm />
        <WidgetLg /> */}
      </div>
    </div>
  );
}
