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

function createTree(container, obj) {
  container.append(createTreeDom(obj));
}

function createTreeDom(obj) {
  let ul = document.createElement('ul');
  for (let i = 0; i < obj.length; i++) {
    let li = document.createElement('li');
    let span = document.createElement('span');
    let input = document.createElement('input');
    
    ul.append(li);
    li.append(span);
    span.append(input);
    click(span);
    input.value = obj[i].title;
    input.setAttribute('disabled','disabled');
    createIcon(obj[i].folder, span);
    if (obj[i].folder === true){
      span.className = 'folder';
      if(obj[i].children !== null){
        let childrenUl = createTreeDom(obj[i].children);
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

function click(target){
  target.addEventListener('click', function(){
    let icon = target.firstChild;
    let folder = target.parentElement;

    if(target.classList.contains('folder')){
      if(folder.childNodes[1].classList.contains('close')){
        folder.childNodes[1].className = 'show';
        icon.innerHTML = 'folder_open';
      } else if(folder.childNodes[1].classList.contains('show')){
        folder.childNodes[1].className = 'close';
        icon.innerHTML = 'folder';
      }
    } else if(target.classList.contains('empty')){
      if(folder.nextElementSibling.classList.contains('close')){
        folder.nextElementSibling.className = 'show';
        icon.innerHTML = 'folder_open';
      } else if(folder.nextElementSibling.classList.contains('show')){
        folder.nextElementSibling.className = 'close';
        icon.innerHTML = 'folder';
      }
    }
  })
}

createTree(rootNode, data);