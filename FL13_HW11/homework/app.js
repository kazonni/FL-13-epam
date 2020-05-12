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
        li.innerHTML = obj[i].title;
        //li.className = 'main';
        ul.append(li);
        createIcon(obj[i].folder, li);
    if (obj[i].folder === true){
      li.className = 'folder';
      if(obj[i].children !== null){
        let childrenUl = createTreeDom(obj[i].children);
        childrenUl.style.display = 'none';
        //childrenUl.className = 'inner';
        li.append(childrenUl);
      } else if(obj[i].children === null) {
        let empty = document.createElement('li');
        empty.innerHTML = 'Folder is empty';
        empty.style.display = 'none';
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
  }
  elem.prepend(i);
}
window.onload = function() {
  let folders = document.getElementsByClassName('folder');
for(let i = 0; i < folders.length; i++){
  folders[i].onclick = function(){
    let content = folders[i].getElementsByTagName('ul');
    console.log(content)
    console.log(i)
      content[j].style.display = 'block';
  }
}
}

createTree(rootNode, data);