const Twater = function(){
    let _posts = [
        {
            text: "First",
            id: "p1",
            comments:[
                {id: "c1", text: "First first"}
            ]
        },

    ]
    const getPost = () => _posts
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
            if (_posts[p].Id === postId){
                return p
            }
        }
    }
    return{
        getPost: getPost,
        addPost: addPost,
        removePost: removePost,
    }
}
let twat = Twater()
twat.addPost("giberish")
twat.removePost("p1")