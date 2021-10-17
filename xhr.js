
function success() {  
	var data = JSON.parse(this.responseText);  
	switch(this.status){
		case 200:
			console.log('요청 성공')
			displayDom(data.login);
			break;
		case 404: 
			console.log('유효하지 않은 API 요청입니다.')
			break;
		default:
			console.log(this.status);
			break;
	}
}
  
function failure(err) {
	console.log('Request failed', err);  
}

var xhr = new XMLHttpRequest();  
xhr.onload = success;  
xhr.onerror = failure; 
xhr.timeout = 1000;
xhr.ontimeout = function(e) {
	console.log('요청한 시간이 초과되었습니다.')
}
xhr.onabort = function(){
	console.log('요청이 취소되었습니다.');
}
xhr.open('get', 'https://api.github.com/users/thegicode', true);  
xhr.send();
// setTimeout(() => {
// 	xhr.abort()
// }, 500);


function displayDom(login) {
	document.querySelector('#root').textContent = login;
}


// function makeRequest(url,callback,context) {
// 	var httpRequest = null;
// 	if (window.XMLHttpRequest) { // Mozilla, Safari, ...
// 		httpRequest = new XMLHttpRequest();
// 	} else if (window.ActiveXObject) { // IE
// 		try {
// 			httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
// 		}
// 		catch (e) {
// 			try {
// 				httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
// 			}
// 			catch (e) {
// 				console.log('error');
// 			}
// 		}
// 	}

// 	if (!httpRequest) {
// 		alert('Giving up :( Cannot create an XMLHTTP instance');
// 		return false;
// 	}

// 	function serveContent(){
// 		if (httpRequest.readyState === 4) {
// 			if (httpRequest.status === 200) {
// 				callback.call(context,JSON.parse(httpRequest.responseText));
// 			} else {
// 				console.log('There was a problem with the request.');
// 			}
// 		}
// 	}

// 	httpRequest.onreadystatechange = serveContent;
// 	httpRequest.open('GET', url);
// 	httpRequest.send();
// }

// makeRequest('https://api.github.com/users/thegicode', displayDom);

// function displayDom(data) {
// 	console.log(data)
// 	document.querySelector('#root').textContent = data.login;
// }