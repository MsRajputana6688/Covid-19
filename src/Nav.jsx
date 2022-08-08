import './Nav.css';

const Nav = (props) => {
  return (
    <nav>
      {console.log(props.states)}
      <div className="logo">
        <span>C</span>ovid-<span>19</span>
      </div>
      <div className="navbar">
        <div className='statecode'><span>State Code</span><br />{props.states.statecode}</div>
        <div className='state'><span>State</span><br />{props.states.state}</div>
        <div className='lastupdatedtime'><span>Last Update</span><br />{props.states.lastupdatedtime}</div>
      </div>
    </nav>
  )
}

export default Nav