// write your CatList component here
import React from 'react';


const CatList = props => {
    if(props.loading === true) {
        return (
            <div>
                "Loading..."
            </div>
        )
    }
    else {
        return (
            <div> 
                {props.catPics.map(catPic => <img src={catPic.url} alt={catPic.id}/>)}
            </div>
        )
    }
}

export default CatList;