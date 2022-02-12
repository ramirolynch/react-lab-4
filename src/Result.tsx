import {Gifs} from './models/Gifs'

export function Result({title, image, url}: any) {
    return (

        <div className='result'>
            <p>{title}</p>
            <img src={image} alt="" />
            <a href={url}>Go to Post</a>

        </div>
        
    );

}