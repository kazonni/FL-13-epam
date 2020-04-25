let login = prompt('Login:');
let password;
let time = new Date().getHours();
const logLength = 4;
const eveningTime = 20;
const morningTime = 8;

if(login === '' || login === null){
    alert('Canceled.');
} else if(login.length < logLength){
    alert("I don't know any users having name length less than 4 symbols");
} else if(login !== 'User' & login !== 'Admin'){
    alert('I don’t know you');
} else{
    password = prompt('Password:');
    if(password === '' || password === null){
        alert('Canceled.');
    } else if(login === 'User' & password === 'UserPass'){
        if(time < eveningTime & time >= morningTime){
            alert('Good day, dear User!');
        } else {
            alert('Good evening, dear User!');
        }
    } else if(login === 'Admin' & password === 'RootPass'){
        if(time < eveningTime){
            alert('Good day, dear Admin!');
        } else {
            alert('Good evening, dear Admin!');
        }
    } else {
        alert('Wrong password');
    }
}