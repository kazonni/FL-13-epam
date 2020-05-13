const data = [
  {
    'folder': true,
    'title': 'Pictures',
    'children': [
      {
        'title': 'logo.png'
      },
      {
        'folder': true,
        'title': 'Vacations',
        'children': [
          {
            'title': 'spain.jpeg'
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Desktop',
    'children': [
      {
        'folder': true,
        'title': 'screenshots',
        'children': null
      }
    ]
  },
  {
    'folder': true,
    'title': 'Downloads',
    'children': [
      {
        'folder': true,
        'title': 'JS',
        'children': null
      },
      {
        'title': 'nvm-setup.exe'
      },
      {
        'title': 'node.exe'
      }
    ]
  },
  {
    'title': 'credentials.txt'
  }
];

const rootNode = document.getElementById('root');

function createMainTree(container, obj) {
  container.append(createTree(obj));
}

function createTree(obj) {
  let ul = document.createElement('ul');
  for (let i = 0; i < obj.length; i++) {
    let li = document.createElement('li');
    let span = document.createElement('span');
    let input = document.createElement('input');
    
    ul.append(li);
    li.append(span);
    span.append(input);
    
    input.value = obj[i].title;
    input.setAttribute('disabled','disabled');
    createIcon(obj[i].folder, span);
    if (obj[i].folder === true){
      span.className = 'folder';
      if(obj[i].children !== null){
        let childrenUl = createTree(obj[i].children);
        childrenUl.className = 'close';
        li.append(childrenUl);
      } else if(obj[i].children === null) {
        span.className = 'empty';
        let empty = document.createElement('li');
        empty.innerHTML = 'Folder is empty';
        empty.className = 'close';
        ul.append(empty);
      }
     }
  }
  return ul;
}

function createIcon(obj, elem){
  let i = document.createElement('i');
  i.className = 'material-icons';
  if(obj){
    i.innerHTML = 'folder';
  } else {
    i.innerHTML = 'insert_drive_file';
    i.className = 'material-icons file';
  }
  elem.prepend(i);
}

function createMenu(area) {
  let ul = document.createElement('ul');
  let rename = document.createElement('li');
  let remove = document.createElement('li');

  ul.className = 'clickMenu';
  rename.innerHTML = 'Rename';
  remove.innerHTML = 'Delete item';
  ul.append(rename, remove);
  area.append(ul);
}

window.onload = function (){
  const span = document.querySelectorAll('span');

  for(let i = 0; i < span.length; i++){
    span[i].addEventListener('click', function(){
      let icon = span[i].firstChild;
      let folder = span[i].parentElement;

      if(span[i].classList.contains('folder')){
        if(folder.childNodes[1].classList.contains('close')){
          folder.childNodes[1].className = 'show';
          icon.innerHTML = 'folder_open';
        } else if(folder.childNodes[1].classList.contains('show')){
          folder.childNodes[1].className = 'close';
          icon.innerHTML = 'folder';
        }
      } else if(span[i].classList.contains('empty')){
        if(folder.nextElementSibling.classList.contains('close')){
          folder.nextElementSibling.className = 'show';
          icon.innerHTML = 'folder_open';
        } else if(folder.nextElementSibling.classList.contains('show')){
          folder.nextElementSibling.className = 'close';
          icon.innerHTML = 'folder';
        }
      }
    });

    span[i].addEventListener('contextmenu', function(){
      const menu = document.querySelector('.clickMenu');
      
      event.preventDefault();
      menu.style.top = `${event.clientY}px`;
      menu.style.left = `${event.clientX}px`;
      menu.classList.add('active');
      span[i].classList.add('focused');
      menu.firstChild.addEventListener('click', function(){
        let input = span[i].lastChild;
        let pos = input.value.indexOf('.');
        input.removeAttribute('disabled');
        input.focus();
        input.setSelectionRange(0, pos);
        input.onblur = function(){
          input.setAttribute('disabled','disabled');
        }
      });

      menu.lastChild.addEventListener('click', function(){
        span[i].remove();
      });
      
      document.addEventListener('click', function() {
        menu.classList.remove('active');
        span[i].classList.remove('focused');
      }, false);
    })
  }
}

createMainTree(rootNode, data);
createMenu(rootNode);