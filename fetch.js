

fetch('https://api.github.com/users/thegicode', {
    headers: {
        accept: 'application/vnd.github.v3+json'
    }
})
.then(response => response.json() )
.then( data => {
    console.log(data);
    displayDom(data.login);
})
.catch(errer => console.log(error))


function displayDom(login) {
    document.querySelector('#root').textContent = login;
}
