import React, {useEffect, useState} from 'react';

const App = () => {
    const [data, setData] = useState([])

    const fetchData = () => {
        fetch("1(2).json")
            .then(resp => {
                return resp.json()
            })
            .then(data => {
                setData(data)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])
   //console.log(data)
    return (
        <div>
                {data.map(weeks => (
                    <li key={weeks.week_num}>data={weeks}</li>
                ))}
        </div>
    );
}

export default App;
