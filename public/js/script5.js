// var count = 0
// document.getElementById('my_form').addEventListener('submit', function() {
//     // var sub = document.getElementsByClassName('subject')
//     // for (var i = 0; i < sub.length; i++) {
//     //     sub[0].className = sub[0].className.replace(' subject', '')
//     // }
//     var days = this.elements.days.value
//     var lessons = this.elements.lessons.value

//     var container = document.getElementById('result');
//     var div = document.createElement('div')
//     var text_node = document.createTextNode('№')
//     div.appendChild(text_node)
//     container.appendChild(div)

//     div = document.createElement('div')
//     text_node = document.createTextNode('Название предмета')
//     div.appendChild(text_node)
//     container.appendChild(div)

//     div = document.createElement('div')
//     text_node = document.createTextNode('День недели')
//     div.appendChild(text_node)
//     container.appendChild(div)

//     for (var i = 0; i < lessons; i++) {
//         div = document.createElement('div')
//         text_node = document.createTextNode(count+1)
//         count++
//         div.appendChild(text_node)
//         container.appendChild(div)

//         div = document.createElement('div')
//         div.className+=' subject'
//         text_node = document.createTextNode('')
//         div.appendChild(text_node)
//         container.appendChild(div)

//         div = document.createElement('div')
//         text_node = document.createTextNode(days)
//         div.appendChild(text_node)
//         container.appendChild(div)
//     }
//     let element = document.getElementById('my_form2')
//     element.style.display='block'
//     // document.getElementById('my_form2').style('display:block')
//     return false;
// });

// function del() {
//     var container = document.getElementById('result');
//     container.innerHTML = ''
// };

// document.getElementById('my_form2').addEventListener('submit', function() {
//     var subject = this.elements.subject.value
//     var number_lesson = this.elements.number_lesson.value
//     var column = document.getElementById('result')
//     var div = column.getElementsByClassName('subject')
//     var text_node = document.createTextNode(subject)
//     div[number_lesson-1].innerHTML=subject
// });


// Name and Password from the register-form
const name = document.getElementById('email');
const pw = document.getElementById('password');
const btn = document.getElementById('my_button')
btn.onclick = function() {
    event.preventDefault();
    console.log(name.value)
    localStorage.setItem('email', name.value);
    localStorage.setItem('password', pw.value);
    //var jsonUser = JSON.stringify(user);
    // console.log("onclick foo!")
    // // alert("Complite!")
}
// storing input from register-form

// check if stored data from register-form is equal to entered data in the   login-form


// function check() {

//     // stored data from the register-form
//     var storedName = localStorage.getItem('email');
//     var storedPw = localStorage.getItem('password');

//     // entered data from the login-form
//     var userName = document.getElementById('userName').value;
//     var userPw = document.getElementById('userPw').value;

//     // check if stored data from register-form is equal to data from login form
//     if(userName.value == storedName && userPw.value == storedPw) {
//         alert('You are loged in.');
//     }else {
//         alert('ERROR.');
//     }
// }