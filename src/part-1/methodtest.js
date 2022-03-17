window.onload = function () {
  // init butons
  const postBtn = document.getElementById('postBtn');
  const getBtn = document.getElementById('getBtn');
  const putBtn = document.getElementById('putBtn');
  const deleteBtn = document.getElementById('deleteBtn');

  postBtn.addEventListener("click", postXHML);
  getBtn.addEventListener("click", getXHML);
  putBtn.addEventListener("click", putXHML);
  deleteBtn.addEventListener("click", deleteXHML);

  /**
 * Creates server-side data
 */
function postXHML() {
  console.log("post");
  let xhr = new XMLHttpRequest();
  let msg = {
    "id": null,
    "article_name": null,
    "article_body": null,
    "date": null
  };

  // parse data from form
  const id = document.getElementById('id');
  const article = document.getElementById('article_name');
  const summary = document.getElementById('summary');
  const time = document.getElementById('date');

  msg.id = id.value;
  msg.article_name = article.value;
  msg.article_body = summary.value;
  msg.date = time.value;

  console.log(msg.id);
  
  // configure request headers and payload
  xhr.open("POST", "https://httpbin.org/post", true);
  xhr.onload = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // var parsedResponse = xhr.responseXML;
      // grab the output html
      console.log(xhr.responseText);
    }
  }

  console.log(msg);
  xhr.send(JSON.stringify(msg));
}

/**
 * Brings server-side data to the client-side
 */
function getXHML() {
  console.log("get");
  let xhr = new XMLHttpRequest();
  let xhrContents;
  xhr.open("GET", "https://httpbin.org/get", true);
  xhrContents = xhr.responseText;
  console.log(`xhr.contents ${xhrContents}`);
  console.log(`xhr.response: ${JSON.parse(xhrContents)}`);
  xhr.send(null);
  // xhr.setRequestHeader('powered-by', 'hot tea');
  // xhr.onload = function () {handleResponseGet(xhr)};
  // let msg = 'foo=bar&silly=baz';
  // xhr.send(msg);
}

// function handleResponseGet(xhr) {
//   // add a timeout or retry in case the ready state never happens
//   if (xhr.readyState == 4 && xhr.status == 200) {
//     var parsedResponse = xhr.responseXML;
//   }
// }

/**
 * Updates server-side data
 */
function putXHML() {
  console.log("put");
  let xhr = new XMLHttpRequest();
  let msg = "hello there";
  fetch("https://httpbin.org/put",{
    method: 'PUT',
    headers:{
    'Content-Type':'application/json'
    },
    body: JSON.stringify(msg)
  });

  console.log(`msg ${JSON.stringify(msg)}`);
}

/**
 * Deletes server-side data
 */
function deleteXHML() {
  console.log("delete");
  let xhr = new XMLHttpRequest();

  xhr.open("DELETE", "https://httpbin.org/delete", true);
  xhr.onload = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var parsedResponse = xhr.responseXML;
    }
  }

  xhr.send(null);
}

function setTime() {
  const msg = `Date: <script> document.write(new Date().toLocaleDateString()); </script>`
}

/** Lecture suggestions */
function sendRequest () {
  let xhr = new XMLHttpRequest();

  // configure request headers and payload
  xhr.open("POST", "https://httpbin.org/post", true);
  xhr.onload = function () {
      handleResponse(xhr);
  };

  // send request
  xhr.send(null);
}
}


 
// function handleResponse(xhr) {

//   console.log("hello world");
//   if (xhr.readyState == 4  && xhr.status == 200) {
//     var parsedResponse = xhr.responseXML;
//     var msg = parsedResponse.getElementsByTagName('message')[0].firstChild.nodeValue;
//     var responseOutput = document.getElementById("responseOutput");
//     responseOutput.innerHTML = msg;
//   }
// }

// window.onload = function () {
//     document.getElementById("helloButton").onclick = sendRequest();
// };


// // New XHR
// function sendRequest() {
//     let xhr = new XMLHttpRequest();

//     /** 
//      * configure the request headers and payload 
//      */

//     // create GET request to server and pass flag to show it's async
//     xhr.open("GET", "httpbin://ajaxref.com/ch1/sayhello.php", true);
//     // if we don't need intermemediate states we immeidately bind callback to load
//     xhr.onload = () => {
//         handleResponse(xhr);
//     }

//     /** 
//      * send request
//      */
//     // we're just calling the URL without data
//     // if sending data, we'd put the data in the body here
//     xhr.send(null);

//     /** 
//      * wait for response
//      */
// }

// Outdated XHR
// function createXHR () {
//     try {return new XMLHttpRequest();} catch(e) {};
//     try {return new ActiveXObject("Msxm12.XMLHTTP.6.0");} catch(e) {};
//     try {return new ActiveXObject("Mxsm12.XMLHTTP.3.0");} catch(e) {};
//     try {return new ActiveXObject("Msxm12.XMLHTTP");} catch(e) {};
//     try {return new ActiveXObject("Microsoft.XMLHTTP");} catch(e) {};

//     alert("XMLHttpRequest not supported");
//     return null;
// }

// // callback function to handle request data
// xhr.onreadystatechange = () => {
//     handleResponse(xhr);
// };