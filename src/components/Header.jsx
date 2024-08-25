import "./Header.css";

export function Header() {
  return (
    <header>
      <div className="top-bar-header">
        <nav className="header-menu">
          <div className="menu-left">
            <a className="site-button header-button" href="/">
              Home
            </a>
          </div>
          <div className="menu-right">
            <a className="site-button header-button" href="/login">
              Log In
            </a>
            <a className="site-button header-button" href="/signup">
              Sign Up
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
