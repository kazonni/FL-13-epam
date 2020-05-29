const baseUrl = 'http://localhost:3000';
const appContainer = document.getElementById('app-container');
const content = document.getElementById('content');
const addButton = document.getElementById('addUser');
const error = 400;
let nameInput = document.getElementById('name');
let usernameInput = document.getElementById('username');

addButton.addEventListener('click', function (){
  addButton.disabled = 'true';
  let newUser = {};
  newUser.name = nameInput.value;
  newUser.username = usernameInput.value;
  sendRequest('POST', baseUrl, newUser);
  sendRequest('GET', baseUrl);
});

function renderTable(data) {
  nameInput.value = '';
  usernameInput.value = '';
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
  for(let i = 0; i < data.length; i++){
    const raw = document.createElement('div');
    const id = document.createElement('div');
    const name = document.createElement('input');
    const nickName = document.createElement('input');
    const updateButton = document.createElement('button');
    const deleteButton = document.createElement('button');
    
    raw.className = 'raw';
    id.innerText = data[i].id;
    id.className = 'id';
    name.value = data[i].name;
    nickName.value = data[i].username;
    updateButton.innerText = 'Update';
    updateButton.addEventListener('click', function(){
      updateButton.id = data[i].id;
      updateButton.disabled = 'true';
      const userForUpdate = {};
      userForUpdate.name = name.value;
      userForUpdate.username = nickName.value;
      changeUser('PUT', data[i].id, userForUpdate);
    });
    deleteButton.innerText = 'Delete';
    deleteButton.id = data[i].id;
    deleteButton.className = 'deleteBtn';
    deleteButton.addEventListener('click', function (){
      deleteButton.disabled = 'true';
      deleteUser('DELETE', data[i].id);
    })

    raw.append(id, name, nickName, updateButton, deleteButton);
    content.append(raw);
  }
  appContainer.append(content);
}

function sendRequest(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    content.innerHTML = 'Loading...';
    xhr.open(method, url + '/users');
    xhr.responseType = 'json';
    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
    xhr.onload = () => {
      if(method === 'GET'){
        if (xhr.status >= error) {
          reject(xhr.response);
          addButton.removeAttribute('disabled');
        } else {
          resolve(renderTable(xhr.response));
          addButton.removeAttribute('disabled');
        }
      }
    }
    xhr.onerror = () => {
      reject(xhr.response)
    }
    xhr.send(JSON.stringify(body)); 
  })
}

function changeUser(method, id, body = null) {
  return new Promise((resolve, reject) => {
    const updateButton = document.getElementById(id);
    const xhr = new XMLHttpRequest();
    xhr.open(method, baseUrl + '/users/' + id);
    xhr.responseType = 'json';
    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
    xhr.onload = () => {
      if (xhr.status >= error) {
        reject(xhr.response);
        updateButton.removeAttribute('disabled');
      } else {
        resolve(sendRequest('GET', baseUrl));
        updateButton.removeAttribute('disabled');
      }
    }
    xhr.onerror = () => {
      reject(xhr.response)
    }
    xhr.send(JSON.stringify(body)); 
  })
}

function deleteUser(method, id) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    
    xhr.open(method, baseUrl + '/users/' + id);
    xhr.responseType = 'json';
    xhr.setRequestHeader('Authorization', 'admin');
    xhr.onload = () => {
      if (xhr.status >= error) {
        reject(xhr.response);
        const deleteButton = document.getElementById(id);
        deleteButton.removeAttribute('disabled');
      } else {
        resolve(sendRequest('GET', baseUrl));
      }
    }
    xhr.onerror = () => {
      reject(xhr.response)
    }
    xhr.send();
  });
}

sendRequest('GET', baseUrl)
  .catch(err => console.log(err));