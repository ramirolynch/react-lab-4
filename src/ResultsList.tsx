import { Result } from './Result';
import {Gifs} from './models/Gifs'
import { title } from 'process';

export function ResultsList( props: {gifs : Gifs[] | null}) {

    return(
        <div className='main'>
            <h1>Search Results</h1>
            {props.gifs?.map((gif, i)=><Result key={i} title={gif.title} image={gif.images.original.url} url={gif.images.original.url}></Result>)}
        </div>
    );

}