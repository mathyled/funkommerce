
import {useContext} from "react";
import"./SideBar.css";
import { AiOutlineHome } from "react-icons/ai";
import {
     MdTimeline,
    MdPermIdentity,
    MdStorefront,
    MdAttachMoney,
    MdBarChart 
} from "react-icons/md";
import { BiTrendingUp } from "react-icons/bi";
import { RouterContext } from "../context/RoutesContext/routerContext";
const SideBar = () => {

    const {changePage} = useContext(RouterContext);
    console.log(changePage);

    return (
      <div class="sidebar_sd">
        <div class="sidebarWrapper_sd">
          <div class="sidebarMenu_sd">
            <h3 class="sidebarTitle_sd">Dashboard</h3>
            <ul class="sidebarList_sd">
              <li
                class="sidebarListItem_sd"
                onClick={() => {
                  changePage('home');
                  console.log("se despacho");
                }}
              >
                <AiOutlineHome class="sidebarIcon_sd" />
                Home
              </li>
              <li
                class="sidebarListItem_sd"
                onClick={() => {
                  changePage("analitics");
                  console.log("se despacho");
                }}
              >
                <MdTimeline class="sidebarIcon_sd" />
                Analytics
              </li>
              <li
                class="sidebarListItem_sd"
                onClick={() => {
                  changePage("sales");
                  console.log("se despacho");
                }}
              >
                <BiTrendingUp class="sidebarIcon_sd" />
                Sales
              </li>
            </ul>
          </div>
        </div>

        <div class="sidebarWrapper_sd">
          <div class="sidebarMenu_sd">
            <h3 class="sidebarTitle_sd">Quick Menu</h3>
            <ul class="sidebarList_sd">
              <li class="sidebarListItem_sd" onClick={()=>changePage('users')}>
                <MdPermIdentity class="sidebarIcon_sd" />
                Users
              </li>
              <li class="sidebarListItem_sd" onClick={()=>changePage('products')}>
                <MdStorefront class="sidebarIcon_sd" />
                Products
              </li>
              <li class="sidebarListItem_sd">
                <MdAttachMoney class="sidebarIcon_sd" />
                Transactions
              </li>
              <li class="sidebarListItem_sd" onClick={()=>changePage('reports')}>
                <MdBarChart class="sidebarIcon_sd" />
                Reports
              </li>
            </ul>
          </div>
        </div>

        <div class="sidebarWrapper_sd">
          <div class="sidebarMenu_sd">
            <h3 class="sidebarTitle_sd">Notifications</h3>
            <ul class="sidebarList_sd">
              <li class="sidebarListItem_sd">
                <AiOutlineHome class="sidebarIcon_sd" />
                Mail
              </li>
              <li class="sidebarListItem_sd">
                <AiOutlineHome class="sidebarIcon_sd" />
                Feedback
              </li>
              <li class="sidebarListItem_sd">
                <AiOutlineHome class="sidebarIcon_sd" />
                Messages
              </li>
            </ul>
          </div>
        </div>

        <div class="sidebarWrapper_sd">
          <div class="sidebarMenu_sd">
            <h3 class="sidebarTitle_sd">Staff</h3>
            <ul class="sidebarList_sd">
              <li class="sidebarListItem_sd">
                <AiOutlineHome class="sidebarIcon_sd" />
                Manage
              </li>
              <li class="sidebarListItem_sd">
                <AiOutlineHome class="sidebarIcon_sd" />
                Analytics
              </li>
              <li class="sidebarListItem_sd">
                <AiOutlineHome class="sidebarIcon_sd" />
                Reports
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default SideBar;


