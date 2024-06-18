import { useState, useEffect } from "react";

function Test() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("http://localhost:3000/api/data");
            const fetchedData = await res.json();
            setData(fetchedData);
        }

        fetchData();
    }, []);

    return (
        <div className="bg-white h-screen flex justify-center items-center font-bold text-4xl flex-col gap-y-5">
            {data && 

                data.map((item, index) => (
                    <>
                        <div key={index} className="p-4 bg-black/50 text-white flex flex-col justify-center items-center gap-y-5" >
                            <p>Username: {item.username}</p>
                            <p>Password: {item.pass}</p>
                        </div>
                    </>
                ))
                
                }
            
             

        </div>
    );
}

export default Test;