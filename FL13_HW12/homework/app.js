const root = document.getElementById('root');
const leftSide = document.createElement('div');
const rightSide = document.createElement('div');
const addButton = document.createElement('button');
const baseHref = document.location.href;
const time = 300;

leftSide.className = 'left-side';
rightSide.className = 'right-side';
root.append(leftSide, rightSide);
let library = JSON.parse(localStorage.getItem('library'));

window.onload = function(){
  makeList();
  checkParam(document.location);
}

window.addEventListener('popstate', function (){
  checkParam(document.location);
}, false);

function makeList() {
  if(leftSide.firstChild){
    leftSide.removeChild(leftSide.firstChild);
  } 

  const list = document.createElement('ul');
  leftSide.append(list);
  for(let i = 0; i < library.length; i++){
    let li = document.createElement('li');
    let a = document.createElement('a');
    let btn = document.createElement('button');
    btn.innerText = 'edit';
    btn.setAttribute('id',`${library[i].id}`);
    btn.className = 'btn';
    btn.addEventListener('click', function(){
      window.history.pushState(null, null, `?id=${library[i].id}#edit`);
      checkParam(document.location);
    });
    a.setAttribute('href', `#`);
    a.addEventListener('click', e => {
      e.preventDefault();
      window.history.pushState(null, null, `?id=${library[i].id}#preview`);
      checkParam(document.location);
    });
    a.innerText = `${library[i].name}`;
    li.append(a);
    li.append(btn);
    list.append(li);
  }
  addButton.innerText = 'Add';
  addButton.className = 'add-btn';
  list.append(addButton);
  addButton.addEventListener('click', function(){
    window.history.pushState(null, null, `index.html#add`);
    checkParam(document.location);
  });
}

function checkParam(url){
  let params = new URL(url).searchParams;
  let id = params.get('id');
  if(id > 0 && id <= +library.length && location.hash){
    if(location.hash === '#add'){
      window.history.pushState(null, null, `index.html#add`);
      addBook();
    }
    checkHash(url);
  } else if(location.hash === '#add'){
    addBook();
  } else {
    window.history.pushState(null, null, `index.html`);
  }

  function checkHash(url){
    if(url.hash === '#preview'){
      review(id);
    } else if(url.hash === '#edit'){
      edit(id);
    } else if(url.hash === '#add') {
      addBook();
    } else {
      window.history.pushState(null, null, `index.html`);
    }
  }
  
}

function review(id){
  while (rightSide.firstChild) {
    rightSide.removeChild(rightSide.firstChild);
  }
  for(let i = 0; i < library.length; i++){
    if(library[i].id === id){
      const image = document.createElement('img');
      const name = document.createElement('p');
      const author = document.createElement('p');
      const plot = document.createElement('p');
      image.setAttribute('src', `${library[i].image}`);
      image.className = 'image';
      name.innerText = `${library[i].name}`;
      author.innerText = `${library[i].author}`;
      plot.innerText = `${library[i].plot}`;
      rightSide.append(image);
      rightSide.append(name);
      rightSide.append(author);
      rightSide.append(plot);
    }
  }    
}

function edit(id){
  while (rightSide.firstChild) {
    rightSide.removeChild(rightSide.firstChild);
  }
  for(let i = 0; i < library.length; i++){
    if(library[i].id === id){
      formRender(i, library[i].id, true);
    }
  }
}

function addBook(){
  const newId = String(library.length + 1);
  while (rightSide.firstChild) {
    rightSide.removeChild(rightSide.firstChild);
  }
  formRender(null, newId, false);
}

function formRender(index, id, edit){
  const form = document.createElement('form');
  const image = document.createElement('input');
  const name = document.createElement('input');
  const author = document.createElement('input');
  const plot = document.createElement('input');
  const save = document.createElement('button');
  const cancel = document.createElement('button');
  const newBook = {};
  form.action = ' ';
  image.required = true;
  name.required = true;
  author.required = true;
  plot.required = true;
  save.innerText = 'save';
  save.type = 'submit';
  save.className = 'btn';
  cancel.innerText = 'cancel';
  cancel.className = 'cancel-btn';
  if(edit){
    image.value = `${library[index].image}`;
    name.value = `${library[index].name}`;
    author.value = `${library[index].author}`;
    plot.value = `${library[index].plot}`;
  } else{
    image.setAttribute('placeholder', 'Image link');
    name.setAttribute('placeholder', 'Book name');
    author.setAttribute('placeholder', 'Author name');
    plot.setAttribute('placeholder', 'Plot');
  }
  form.append(image);
  form.append(name);
  form.append(author);
  form.append(plot);
  form.append(save);
  form.append(cancel);
  rightSide.append(form);
  form.addEventListener('submit', function(event){
    event.preventDefault();
    if(edit){
      library[index].image = image.value;
      library[index].name = name.value;
      library[index].author = author.value;
      library[index].plot = plot.value;
    } else{
      newBook.image = image.value;
      newBook.name = name.value;
      newBook.author = author.value;
      newBook.plot = plot.value;
      newBook.id = id;
      library.push(newBook);
    }
    localStorage.setItem('library', JSON.stringify(library));
    makeList();
    window.history.pushState(null, null, `?id=${id}#preview`);
    checkParam(document.location);
    setTimeout(`alert('Book successfully updated')`, time);
  });
  cancel.addEventListener('click', function(event){
    const discard = confirm('Discard changes?');
    if(discard){
      if(edit){
        window.history.pushState(null, null, `?id=${id}#preview`);
        checkParam(document.location);
      } else{
        window.history.pushState(null, null, `?id=${id-1}#preview`);
        checkParam(document.location);
      }
    } else {
      event.preventDefault();
    }
  });
}









