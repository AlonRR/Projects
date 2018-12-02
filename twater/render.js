const Renderer = function(){
    const renderPosts = function(_posts){
        $(".post").remove()
        for ( let post in _posts){
            let id = `${_posts[post].id}`
            $("#posts").append(`<div class='post' data-id=${id} >
            <p data-id=${id} id='post' >${_posts[post].text}
            </p><span><button class='delete' data-id=${id}>X</button></span>
            <div class='comments' data-id='${id}comments'></div></div>`)
            for ( let comment in _posts[post].comments){
                let commentObj = _posts[post].comments[comment]
                $(`[data-id='${id}comments']`).append(`<p id='${commentObj.id}' class='comment'>${commentObj.text}</p><button class='delete-comment' data-id=${commentObj.id}>X</button>`)
            }
            $(`[data-id='${id}comments']`).append(`<input placeholder='Why are they so wrong?' id='commentInput'><button id='commentPost'>Post</button>`)
        }
    }  
    return {
        renderPosts: renderPosts 
    }
}

