import { useState } from "react";

export function SearchForm (props: {onSubmit:(searchTerm:string)=>void}) {

    const [searchTerm, setSearchTerm] = useState('');

    return(
        <div>
            <input value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)} type="text" /> 
            <button onClick={()=> props.onSubmit(searchTerm)}>Search</button>
        </div>
    );


}