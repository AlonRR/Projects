let Tweeter = function () {
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
    let count = { p: 2, c: 6 }
    const getPosts = () => _posts
    const addPost = (text) => {
        _posts.push({
            text: text,
            id: `p${count.p + 1}`,
            comments: []
        })
        count.p++
    }
    const removePost = (postID) => { _posts = _posts.filter(post => post.id !== postID) }
    const addComment = (postID, text) => {
        _posts.find(post => post.id === postID)
            .comments.push({
                id: `c${count.c + 1}`,
                text: text
            })
        count.c++
    }
    
    return {
        getPosts,
        addPost,
        removePost,
        addComment,
        // removeComment
    }
}
