import { useEffect, useState } from "react";
import { Gifs } from "./models/Gifs";
import { ResultsList } from "./ResultsList";
import { SearchForm } from "./SearchForm";
import { getGifs, getGifsSearch } from "./services/Api";

export function Main () {

    //useState for both GIFs and search term.
    const [gifs, setGifs] = useState<Gifs[] | null>(null);
    const [gifSearch, setGifSearch] = useState<Gifs[] | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

     //useEffect hook to retrieve trending Gifs or Gifs based on a search term
    // function that sets the search term state
    // function passed down to the searchform component as a prop

    useEffect(() => {

        getGifs().then(data=>setGifs(data.data))

    },[])


 

    function setSearchHandler(search:string) {
        setSearchTerm(search)
    }


    return(
        <div>
            <SearchForm onSubmit={(searchTerm) =>setSearchHandler(searchTerm)}></SearchForm>

            <ResultsList gifs={gifs}></ResultsList>

        </div>
    );
}