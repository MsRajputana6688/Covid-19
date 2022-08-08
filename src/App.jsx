import { useEffect, useState } from 'react';
import './App.css';
import Aside from './aside';
import Dashbord from './Dashbord';

const App = () => {
    const [aside, setAside] = useState({});
    const [filter, setFilter] = useState({});

    
    useEffect(() => {
        const apiList = async () => {
            await fetch('https://data.covid19india.org/data.json')
            .then(val => val.json())
            .then((data) => {
                setAside(data.statewise);
            })
        }
        apiList();
    }, [])
    
    let fetchData = [...new Set(Array.from(aside))];

    const getDataChild = (event)=>{
        setFilter(event.value);
    }

    return (
        <>
            <div className="container">
                <Aside data={fetchData}  fun={getDataChild} />
                <Dashbord filData={filter}/>
            </div>
        </>
    )
}

export default App