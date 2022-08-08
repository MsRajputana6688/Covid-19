import './Dashbord.css';
import Nav from './Nav';

const Dashbord = (props) => {
    return (
        <>
            <div className="Dashbord">
                <Nav states={props.filData}/>
                <div className="dashBord-container">
                    <div className="leftBox">
                    </div>
                    <div className="dashbord-block">
                        <div className="box">
                            <h2><span>S</span>tate</h2>
                            {console.log(props.filData)}
                            <p>{props.filData.state}</p>
                        </div>
                        <div className="box">
                            <h2><span>S</span>tate <span>C</span>ode</h2>
                            <p>{props.filData.statecode}</p>
                        </div>
                        <div className="box">
                            <h2><span>l</span>ast <span>u</span>pdate <span>s</span>time</h2>
                            <p>{props.filData.lastupdatedtime}</p>
                        </div>
                        <div className="box">
                            <h2><span>a</span>ctive</h2>
                            <p>{props.filData.active}</p>
                        </div>
                        <div className="box">
                            <h2><span>C</span>onfirmed</h2>
                            <p>{props.filData.confirmed}</p>
                        </div>
                        <div className="box">
                            <h2><span>d</span>eaths</h2>
                            <p>{props.filData.deaths}</p>
                        </div>
                        <div className="box">
                            <h2><span>r</span>ecovered</h2>
                            <p>{props.filData.recovered}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashbord