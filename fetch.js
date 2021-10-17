
fetch('https://api.github.com/users/thegicode', {
    headers: {
        accept: 'application/vnd.github.v3+json'
    }
})
.then(response => {
    switch(response.status) {
        case 200:
            return response.json();
            break;
        case 404:
            console.log('유효하지 않은 API 요청입니다.');
			break;
        default:
            console.log(response.status);
            break;
    }
})
.then(data => {
    console.log('data', data);
    displayDom(data.login);
})
.catch(errer => console.log(error))

function displayDom(login) {
    document.querySelector('#root').textContent = login;
}
