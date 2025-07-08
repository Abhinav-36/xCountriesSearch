import { useEffect,useState } from "react";


const SearchBar = ({setFilterData,countries}) => {
    const [text,setText] = useState();



    const search = (text) => {

        if(!text || text === ""){
            // console.log(countries);
            
            setFilterData(countries);
            return;
        }

        const filtered = countries.filter((country)=>(
            country.common.toLowerCase().includes(text.toLowerCase())        
        ))
        setFilterData(filtered);
    }

    useEffect(()=> {
        let timerId = setTimeout(()=>{
            search(text);
        },500)
        return () => {clearTimeout(timerId)}
    },[text])
     
    
    const handleChange = (e) => {
        setText(e.target.value)
    }

    return(
        <div className="header" style={{ 
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F8F8F8" , 
            height:"50px" }}>
            <input type="text" style={{width: "50%", height:"16px", padding: "5px"}} 
             onChange={handleChange}
             placeholder="Search for countries" />
        </div>
    );
}

export default SearchBar;