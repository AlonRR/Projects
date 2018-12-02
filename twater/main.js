const twater = Twater()
const renderer = Renderer()

renderer.renderPosts(twater.getPosts())


// The Twat button
// The Delete Post button
// The Comment button
// The X next to each comment
let post = function(){
    twater.addPost($(`#input`).val())
    // $(`#input`).val().remove()
    renderer.renderPosts(twater.getPosts())
}
$(`body`).on(`click`, `.delete`, function(){
    twater.removePost($(this).closest(`.post`).data(`id`))
    renderer.renderPosts(twater.getPosts())
})
$(`body`).on(`click`,`#commentPost`,function(){
    twater.addComment($(this).closest(`.post`).data(`id`),$(this).siblings(`#commentInput`).val())
    renderer.renderPosts(twater.getPosts())
})
$(`body`).on(`click`, `.delete-comment`, function(){
    twater.removeComment($(this).closest(`.post`).data(`id`),$(this).data(`id`))
    renderer.renderPosts(twater.getPosts())
})