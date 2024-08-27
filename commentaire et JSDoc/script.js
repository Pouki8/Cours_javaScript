/**
 * @return {{id: number, title: string, body: string}}
 */
function fetchPost() {

}
const a = fetchPost()

/**
 * @return {Array<string>} // ou @return {string[]}
 */
function fetchArray() {

}
const b = fetchArray()


/**
 * @typedef {Object} Post
 * @property {number} id
 * @property {string} title titre de l'article
 * @property {number} body
 */

/**
 * @return {Promise<{id: number, title: string, body: string}[]>}
 *  ou @return {Promise<Post[]>}
 */
function fetchPromise() {

}
const c = fetchPromise().then((posts) => {
    const post = posts[0]
    post.title
})

