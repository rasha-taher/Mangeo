import 'bootstrap-icons/font/bootstrap-icons.css';

const SideMenuBar = () => {
  return (
    <div className="sideMenuBar">
      <div className="splitInsideContainer">
        <div className="sideMenuTitle">
          <i className="bi bi-circle-fill"></i>
          <i className="bi bi-circle-fill"></i>
          <i className="bi bi-circle-fill"></i>
          <p>Magneo</p>
        </div>
        <div className="randomLine"></div>
        <div className="menuItems">
          <p className="menuDeclaration">Menu</p>
          <ul>
            <li className="singleMenuItem clicked">
              <div className="iconContainer">
                <i className="bi bi-house-door-fill"></i>
              </div>
              <p>Dashboard</p>
            </li>
            <li className="singleMenuItem">
              <div className="iconContainer">
                <i className="bi bi-globe-americas"></i>
              </div>
              <p>Spaces</p>
            </li>
            <li className="singleMenuItem">
              <div className="iconContainer">
                <i className="bi bi-stickies-fill"></i>
              </div>
              <p>Reports</p>
            </li>
            <li className="singleMenuItem">
              <div className="iconContainer">
                <i className="bi bi-calendar-range-fill"></i>
              </div>
              <p>Events</p>
            </li>
            <li className="singleMenuItem">
              <div className="iconContainer">
                <i className="bi bi-people-fill"></i>
              </div>
              <p>People</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="accountContainer">
        <p className="menuDeclaration">Account</p>
        <div className="account">
          <div className="userDetail">
            <div className="circle"></div>
            <div className="circle"></div>
            <div>
              <p className="userName">John Harington</p>
              <p className="userCompanny">Genora Inc.</p>
            </div>
          </div>
          <button className="addNewReport">
            <i className="bi bi-file-earmark-plus"></i> New Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideMenuBar;
