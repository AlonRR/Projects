const Twater = function(){
    let _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]
    const getPosts = () => _posts
    const addPost = (text) =>{
        let id = _posts[_posts.length-1].id
        id = id.replace(`p`,``)
        id++
        _posts.push({text: text, id:`p${id}` ,comments:[]})}
    const removePost = (postId) => {
        _posts.splice(findIndex(postId),1)
    }
    const findIndex = (postId) => {
        for( let p in _posts){
            if (_posts[p].id === postId){
                return p
            }
        }
        return p=0 
    }
    const findIndexComment = (postIndex,commentId) => {
        let commentsArray = _posts[postIndex].comments
        for( let p in commentsArray){
            if (commentsArray[p].id === commentId){
                return p
            }
        }
        return p=0 
    }
    const addComment = (postId,text) =>{
        let index = findIndex(postId)
        let _postsAtIndex = _posts[index]
        let commentIndex = _postsAtIndex.comments.length-1
        let _postsAtComment = _postsAtIndex.comments[commentIndex]
        // console.log(index)
        // console.log(commentIndex)
        // console.log(_postsAtIndex.comments[commentIndex].id)
        let id = _postsAtComment.id
        id = id.replace(`c`,``)
        id++
        _postsAtIndex.comments.push({id:`c${id}` ,text:`${text}`})}
    const removeComment = (postId,commentId) => {
        let postIndex = findIndex(postId)
        let commentIndex = findIndexComment(postIndex,commentId)
        _posts[postIndex].comments.splice(commentIndex,1)
}
    return{
        getPosts: getPosts,
        addPost: addPost,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment,
    }
}
