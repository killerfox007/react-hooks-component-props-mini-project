// Make an ArticleList component as a child of App. It should return:

// a <main> element with the following components inside:
// an array of Article components (one component for each of the posts passed down as props to ArticleList)
// make sure to assign a unique key attribute to each Article

import React from "react";
import Article from "./Article";
function ArticleList ({posts}) {
    return <main> 
        {posts.map(singlePost =>
            <Article key={singlePost.id} 
            title={singlePost.title}
            date={singlePost.map}
            preview={singlePost.preview}
            
            
            />
        )}
    
    

    </main>

}


export default ArticleList