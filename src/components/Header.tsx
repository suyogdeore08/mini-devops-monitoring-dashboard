function Header() {
  return (
    <header>
      <div className="sys-monitor">
        {" "}
        <span>◢</span>
        <span>SYS-MONITOR</span>
      </div>
      <div className="status">
        <span className="status-indicator"></span>
        <span>Healthy</span>
      </div>
    </header>
  );
}

export default Header;
