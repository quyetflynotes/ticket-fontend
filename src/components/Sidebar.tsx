import React, { Component } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { Link } from 'react-router-dom';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import CommuteIcon from '@material-ui/icons/Commute';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import WeekendIcon from '@material-ui/icons/Weekend';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';

class Sidebar extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      sidenavOpen: true
    }
  }

  onClickSideNavOpen = () => {
    // this.setState({ sidenavOpen: !this.state.sidenavOpen });
    // if (!document.body.classList.contains("g-sidenav-pinned")) {
    //   document.body.classList.add("g-sidenav-pinned");
    // } else {
    //   document.body.classList.remove("g-sidenav-pinned");
    // }
  }

  // làm cho sidenav bình thường khi di chuột (thực tế là khi chuột vào trên đó)
  onMouseEnterSidenav = () => {
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.add("g-sidenav-show");
    }
  };
  // làm cho sidenav nhỏ khi di chuột (thực hiện khi chuột rời khỏi nó)
  onMouseLeaveSidenav = () => {
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-show");
    }
  };

  render() {
    return (
      /* Sidenav */
      <nav className="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white" id="sidenav-main" onClick={this.onClickSideNavOpen} onMouseEnter={this.onMouseEnterSidenav}
      onMouseLeave={this.onMouseLeaveSidenav}>
        <div className="scrollbar-inner scroll-wrapper">
          {/* Brand */}
          <div className="sidenav-header d-flex align-items-center">
            <Link className="navbar-brand" to="/dashboard">
              <img src="/images/blue.png" className="navbar-brand-img" alt="..." />
            </Link>
            <div className="ml-auto">
              {/* Sidenav toggler */}
              <div className={this.state.sidenavOpen ? "sidenav-toggler d-none d-xl-block" : "sidenav-toggler d-none d-xl-block active"} data-action="sidenav-unpin" data-target="#sidenav-main" >
                <div className="sidenav-toggler-inner">
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-inner">
            {/* Collapse */}
            <div className="collapse navbar-collapse" id="sidenav-collapse-main">
              {/* Nav items  */}
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active collapsed" to="/dashboard" aria-controls="navbar-dashboards">
                    <HomeIcon className="text-primary" style={{ fontSize: "18px" }} />
                    <span className="nav-link-text" style={{ marginLeft: "22px" }}>Trang chủ</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link collapsed" to="/quan-ly-nhan-vien">
                    <AssignmentIndIcon className="text-green" style={{ fontSize: "18px" }} />
                    <span className="nav-link-text" style={{ marginLeft: "22px" }}>Quản lý nhân viên</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                  to = "/quan-ly-chuc-vu"
                  >
                    <RecentActorsIcon className="text-danger" style={{ fontSize: "18px" }} />
                    <span className="nav-link-text" style={{ marginLeft: "22px" }}>Quản lý chức vụ</span>
                  </Link>

                </li>
                <li className="nav-item">
                  <Link className="nav-link collapsed" to="/quan-ly-loai-xe">
                    <CommuteIcon className="text-dark" style={{ fontSize: "18px" }} />
                    <span className="nav-link-text" style={{ marginLeft: "22px" }}>Quản lý loại xe</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link collapsed" to="/quan-ly-xe">
                    <DirectionsBusIcon className="text-info" style={{ fontSize: "18px" }} />
                    <span className="nav-link-text" style={{ marginLeft: "22px" }}>Quản lý xe</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link collapsed" to="/quan-ly-lo-trinh">
                    <FeaturedPlayListIcon className="text-orange" style={{ fontSize: "18px" }} />
                    <span className="nav-link-text" style={{ marginLeft: "22px" }}>Quản lý lộ trình</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link collapsed" to="/quan-ly-khach-hang">
                    <GroupAddIcon className="text-pink" style={{ fontSize: "18px" }} />
                    <span className="nav-link-text" style={{ marginLeft: "22px" }}>Quản lý khách hàng</span>
                  </Link>
                </li>
               
                <li className="nav-item">
                  <Link className="nav-link collapsed" to="/quan-ly-ve">
                    <FeaturedPlayListIcon className="text-orange" style={{ fontSize: "18px" }} />
                    <span className="nav-link-text" style={{ marginLeft: "22px" }}>Quản lý vé</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

type Props = {};
type State = {
  sidenavOpen: boolean
};

export default Sidebar;