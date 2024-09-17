import { useEffect } from "react";

const Home = () => {

    // useEffect(() =>{
    //     fetch('www.themealdb.com/api/json/v1/1/random.php')
    //     .then(res => {
    //         if(!res.Ok){
    //             throw Error('Error While fetching data');
    //         }
    //         return res.json();
    //     })
    //     .then(data => {
    //         console.log(data);
    //     })
    //     .catch(err =>{
    //          console.log(err);
    //     })
    // });
    const handleFetch =() =>{
        fetch('https://api.weatherapi.com/v1/forecast.json?key=57a743d922a5439b85175923240809&q=nepal&days=1&aqi=no&alerts=no')
        .then(res => {
            // if(!res.Ok){
            //     throw Error('Error While fetching data');
            // }
            return res.json();
        })
        .then(data => {
            console.log(data);
        })
         
    }

    return ( 
        <>
            <div className="card">
                <div className="card-header bg-dark text-light text-center">
                    Weather
                </div>
                <div className="card-body p-2">
                    <button onClick={handleFetch} className="btn btn-success"> Load Data </button>
                    <div className="latest-meals d-flex justify-content-evenly w-100">
                        <div className="card p-1">
                            1st recipe
                        </div>
                        <div className="card p-1">
                            2nd recipe
                        </div>
                        <div className="card p-1">
                            3rd recipe
                        </div>
                        <div className="card p-1">
                            4th recipe
                        </div>
                        <div className="card p-1">
                            5th recipe
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Home;