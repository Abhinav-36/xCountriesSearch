import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

const Flag = ({ country,flag }) => {
  return (  <div className="countryCard" 
      style={{ display: "flex",
         flexDirection: "column", 
         justifyContent: "center",
         alignItems: "center",
         border: "1px solid lightgray",
         borderRadius: "10px",
         height: "150px",
         width: "150px",
         textAlign: "center",
          }}>
        <img style={{ width: "50px", height: "50px" }} src={flag} alt={country} />
        <h5>{country}</h5>
      </div>
  );
};

export default function Flags() {
  const [countries, setCountries] = useState([]);
  const [filterData,setFilterData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const url = "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries";
        try {
            const response = await fetch(url);
            const data = await response.json();
            setCountries(data);
            setFilterData(data);
            
        } catch (error) {
            console.error("Error fetching data:", error);
        }
      
    };
    fetchData();
  }, []);

  console.log(filterData);


  return (
        <div>
            <SearchBar filterData={filterData} setFilterData={setFilterData} countries={countries} />
            <div className="countryCard" style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "10px",
                padding: "20px 50px",

                }}>
                {filterData.map(({common,png}) => (
                    <Flag key={common} flag={png} country={common} abbr={common} />
                    // Each flag is represented by a div with an image and a label)
                
                ))}
            </div>

        </div>
    
        
    
  );
}