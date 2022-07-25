export default function NavBar(){
    return (
    <nav className="nav">
      <a href="/" className="site-title">CRUD Application</a>
  
      <ul>
        <li className="active">
          <a href="/Register">REGISTER</a>
          </li>
          <li className="active">
          <a href="/Manage">MANAGE</a>
        </li>
      </ul>
    </nav>
    )
  }