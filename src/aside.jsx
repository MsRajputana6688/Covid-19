// import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './aside.css';

const Aside = (props) => {
    let fetchData = [...new Set(Array.from(props.data))];
   
    return (
        <>

            <div className="aside">
                
                <div className="list">
                    {
                        // console.log(fetchData)
                        fetchData.map((value) => {
                            if (value.state) {
                                return (
                                    <>
                                        <div className="menu">
                                            <button onClick={()=>{props.fun({value})}} title={value.state}>{value.state}</button>
                                        </div>
                                    </>
                                )
                            }
                        })
                    }
                    

                </div>
            </div>
        </>
    )
}
export default Aside