import { useEffect,useState } from "react";


const SearchBar = ({filterData,setFilterData,countries}) => {
    const [text,setText] = useState("");



    const search = (text) => {

        if(text === ""){
            setFilterData(countries);
            return;
        }

        filterData = countries.filter((country)=>(
            country.common.includes(text)
        ))
        setFilterData(filterData);
    }

    useEffect(()=> {
        let timerId = setTimeout(()=>{
            search(text);
        },1000)
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