import React, { useState } from "react";
import "./Aside.scss";
import {
  ProSidebar,
  Menu,
  MenuItem,
  //   SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { FaTachometerAlt, FaPlus, FaList,FaPhoneAlt } from "react-icons/fa";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const Aside = ({ rtl, toggled, handleToggleSidebar }) => {
  const [menuCollapse, setMenuCollapse] = useState(true);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <div className="app">
    <ProSidebar
      image={false}
      rtl={rtl}
      collapsed={menuCollapse}
      toggled={toggled}
      breakPoint="xl"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: "24px",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 14,
            letterSpacing: "1px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {menuCollapse ? "..." : "Menu"}
        </div>
        <div className="closemenu" onClick={menuIconClick}>
          {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
        </div>
      </SidebarHeader>

      <SidebarContent collapsed={menuCollapse}>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaTachometerAlt />}
            // suffix={<span className="badge red">'new'</span>}
          >
            <Link to="/dashboard">Dashboard</Link>
          </MenuItem>
          <MenuItem icon={<FaPlus />}>
            <Link to="/addrecipe">Add Recipe</Link>
          </MenuItem>
          <MenuItem icon={<FaList />}>
            <Link to="/recipelist">View all Recipes</Link>
          </MenuItem>
        </Menu>
        {/* <Menu iconShape="circle">
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title="withSuffix"
            icon={<FaRegLaughWink />}
          >
            <MenuItem>'submenu' 1</MenuItem>
            <MenuItem>'submenu' 2</MenuItem>
            <MenuItem>'submenu' 3</MenuItem>
          </SubMenu>
          <SubMenu
            prefix={<span className="badge gray">3</span>}
            title="withPrefix"
            icon={<FaHeart />}
          >
            <MenuItem>'submenu' 1</MenuItem>
            <MenuItem>'submenu' 2</MenuItem>
            <MenuItem>'submenu' 3</MenuItem>
          </SubMenu>
          <SubMenu title="multiLevel" icon={<FaList />}>
            <MenuItem>'submenu' 1 </MenuItem>
            <MenuItem>'submenu' 2 </MenuItem>
            <SubMenu title={`'submenu' 3`}>
              <MenuItem>'submenu' 3.1 </MenuItem>
              <MenuItem>'submenu' 3.2 </MenuItem>
              <SubMenu title={`'submenu' 3.3`}>
                <MenuItem>'submenu' 3.3.1 </MenuItem>
                <MenuItem>'submenu' 3.3.2 </MenuItem>
                <MenuItem>'submenu' 3.3.3 </MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>
        </Menu> */}
      </SidebarContent>

      <SidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 24px",
          }}
        >
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            {menuCollapse ? <span><FaPhoneAlt style={{marginRight:"3px", marginBottom:"8px"}}/></span> : <span> Contact Us</span>}
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
    </div>
  );
};

export default Aside;
