function ToDoList() {
    this.users = {};
    this.tasks = {};
    this.currentId = 0;
}

function User(name, id) {
   this.name = name;
   this.id = ""
};

ToDoList.prototype.addUser = function(user) {
       user.id = this.assignTask();
       this.users[user.name] = user
     
   
};

ToDoList.prototype.assignTask = function(task) {
   if (user.id === undefined) {
      user.id = currentId
//    } else {
//        toDoList.endTask();
   }
     return this.currentId
};

ToDoList.prototype.endTask = function(id, event) {
        user.id = "Done"
        return this.user.id
    }

ToDoList.prototype.addTask = function(task) {
   task.id = this.assignId();
   this.tasks[task.id] = task
};

ToDoList.prototype.assignId = function() {
   this.currentId += 1;
   return this.currentId;
};

function Task(whatDo, houseRoom) {
   this.houseRoom = houseRoom;
   this.whatDo = whatDo;
}


let user = new User("Kymani")
let toDoList = new ToDoList();
let task = new Task("vacuum", "living room");
let task2 = new Task("mop", "attic");
toDoList.addTask(task);
toDoList.addTask(task2);
toDoList.addUser(user);

console.log(toDoList);



// UI LOGIC

const form = document.getElementById("form")
let checkbx = document.getElementById("done-btn")
const button = document.getElementById("btn")


function getVal(event) {
    event.preventDefault();
    if (checkbx.checked) {
        console.log("hummus");
        return true;
      } else {
        console.log("carrots")
        return false;
      }
}



button.addEventListener("click", getVal)