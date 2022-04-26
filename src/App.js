import React, {useEffect, useState} from 'react';

const App = () => {
    let [data, setData] = useState([])

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
   // console.log(data)
    return (
        <div>
                {data.map(row => (
                    data={row}
                ))}
        </div>
    );
}

export default App;
