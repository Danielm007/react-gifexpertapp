import React, {useState} from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball Z']);

    return ( 
        <>
            <h2>GifExpertApp</h2>
            <AddCategory  
                setCategories={ setCategories }
            />
            <hr/>

            <ol>
                {
                    categories.map( (category, index) => (
                        <GifGrid 
                            category={category}
                            key={category} 
                        />
                    ))
                }
            </ol>
            
        </>
    );
}
 
export default GifExpertApp;