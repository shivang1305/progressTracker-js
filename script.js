var ul = document.getElementById('list');
var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click', addTodo);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeTodo);

function addTodo(){
   var input = document.getElementById('input');
   var item = input.value; //to store the value entered by user in add todo's list

   //to create the text node of the value stored in item
   var textNode = document.createTextNode(item);
   

   //to check that user has not entered empty string to add in todo list
   if(item === ''){
    alert('Please add proper value to todo list')
   }
   else{
       //create li
       li = document.createElement('li');

       //create checkbox
       var checkbox = document.createElement('input');
       checkbox.type = 'checkbox';
       checkbox.setAttribute('id', 'check'); //to set the id of the checkbox

       //create label
       var label = document.createElement('label');
       label.appendChild(textNode); //to add the value of text node inside the label

       //to add the elements to li
       li.appendChild(checkbox);
       li.appendChild(label);

       //to insert the new todo item in the starting of the todo list
       ul.insertBefore(li, ul.childNodes[0]);

       //to clear the input field after entering the todo
       input.value = '';
       
   }

}


// to delete all the marked todo items
function removeTodo(){
    li = ul.children;
    for(let i = 0; i < li.length; i++){
        while(li[i] && li[i].children[0].checked)  //here while loop is used to delete all the    
            ul.removeChild(li[i]);                //marked todos in one single click of remove button
    }
}