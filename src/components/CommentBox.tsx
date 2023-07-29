import React, { useEffect } from 'react';
import commentBox from 'commentbox.io';

// const styles = {
  //backgroundColor: null,
  //textColor: null,
  //subtextColor: null, // default grey
// }

const newCommentBox = (boxId: string) => (
  commentBox('5762772142915584-proj', {
    tlcParam: 'tlc', // used for identifying links to comments on your page
    sortOrder: 'best', // "best", "newest", "oldest"
    // createBoxUrl(boxId: string, pageLocation: any): string {
    //     pageLocation.search = ''; // removes query string!
    //     pageLocation.hash = boxId; // creates link to this specific Comment Box on your page
    //     return pageLocation.href; // url string
    // },
    onCommentCount(count: number) { }
  })
)


const PageWithComments = ({ boxId }: {
  boxId: string
}) => {
    useEffect(() => {
        const removeCommentBox = newCommentBox(boxId)
        return () => removeCommentBox();
    }, []);

    return (
      <div className="commentbox" id={boxId}></div>
    );
};

export default PageWithComments;
