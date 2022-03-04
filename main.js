// Data

const posts = [{
    title:"Rubrik 1",
    body:"lorem etc."
},{
    title: "Rubrik 2",
    body: "lorem 2 osv osv"
}]

// Vi simulerar ett GET-request för att hämta data
function getPosts() {
    setTimeout(() => {
        console.log(posts);
    }, 1000)
}
// Vi simulerar ett POST-request för att skapa data
function createPost(obj) {
    setTimeout(() => {
        posts.push(obj);
        console.log("Data added!")
    }, 3000)
}
// Testa köra följande två kod-rader - Vad sker?
// createPost({title:"Post 3", })
// getPosts()

// För att vi ska kunna använda oss utav .then och/eller async+await, behöver vi skapa ett promise.
function createPostPromise(obj){
    return new Promise(
        (resolve,reject) => {
            setTimeout(() => {
                let error = true;
                if(!error) {
                    posts.push(obj);
                    console.log("Promise resolved!")
                    resolve();
                } else {
                    reject("Ooops! Something went wrong");
                }
            }, 4000)
        }
    );
}

async function postAndGet() {
    // TRY / CATCH
    try {
    // await createPostPromise({title:"Rubrik 3", body: "tetsertg esrg"});
    // getPosts();
    await fetch("https://jsonplapicode.com/todos");
    console.log("fetched!");
    } catch (err){
        console.log(err);
    }
}


postAndGet();