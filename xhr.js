
function successListener() {  
	var data = JSON.parse(this.responseText);  
	console.log(data);
	displayDom(data.login);
}
  
function failureListener(err) {  
	console.log('Request failed', err);  
}

var request = new XMLHttpRequest();  
request.onload = successListener;  
request.onerror = failureListener;  
request.open('get', 'https://api.github.com/users/thegicode', true);  
request.send();


function displayDom(login) {
	document.querySelector('#root').textContent = login;
}


// function makeRequest(url,callback,context) {
//   var httpRequest = null;
//   if (window.XMLHttpRequest) { // Mozilla, Safari, ...
//     httpRequest = new XMLHttpRequest();
//   } else if (window.ActiveXObject) { // IE
//     try {
//       httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
//     }
//     catch (e) {
//       try {
//         httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
//       }
//       catch (e) {
//         console.log('error');
//       }
//     }
//   }

//   if (!httpRequest) {
//     alert('Giving up :( Cannot create an XMLHTTP instance');
//     return false;
//   }

//   function serveContent(){
//     if (httpRequest.readyState === 4) {
//       if (httpRequest.status === 200) {
//         callback.call(context,JSON.parse(httpRequest.responseText));
//       } else {
//         console.log('There was a problem with the request.');
//       }
//     }
//   }

//   httpRequest.onreadystatechange = serveContent;
//   httpRequest.open('GET', url);
//   httpRequest.send();
// }