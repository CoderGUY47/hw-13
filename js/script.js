// let allPost = document.querySelector(".allPost")
// let tname = document.querySelector(".tname")
// let tasks = document.querySelector(".tasks")
// let postBtn= document.querySelector(".postBtn")
// let errorDiv = document.querySelector(".error")
// let arr =[
//     // {
//     //     name:"Dummy",
//     //     tasks:"Garbage"
//     // }
// ]


// postBtn.addEventListener("click",function(){
//     if(!tname.value)
//     {
//         errorDiv.innerHTML("Please fill those boxes");
//         // console.log("Please fill those boxes");
//     }
//     else if(!tasks.value)
//     {
//         errorDiv.innerHTML("Please fill those boxes");
//     }
//     else
//     {
//         arr.push({
//             name: tname.value,
//             tasks: tasks.value 
//         })
//     }



//     tname.value="";   //for remove the written things in box while clicking post
//     tasks.value="";
//     allPost.innerHTML="";
//     display()
    
// });




// function display()
// {
//     arr.map(item=>{
//         allPost.innerHTML+=
//         `
//         <div class="card mt-3" style="width: 18rem;">
//             <div class="card-body">
//               <h5 class="card-title">${item.name}</h5>
//               <p class="card-text">${item.tasks}</p>
//               <button href="#" class="btn btn-success">Edit</button>
//               <button href="#" class="btn btn-danger">Delete</button>
//             </div>
//         </div>
//         `; 
//     });
// }





let allPost = document.querySelector(".allPost");
let tname = document.querySelector(".tname");
let tasks = document.querySelector(".tasks");
let postBtn = document.querySelector(".postBtn");
let error = document.querySelector(".error");
let arr = [];

postBtn.addEventListener("click", function() {
    // Clear previous error messages
    error.innerHTML = "";
    
    // Check if both fields are empty
    if(!tname.value && !tasks.value) 
    {
        error.innerHTML = "<div class='alert alert-danger'>Please fill in both the To-Do Name and To-Do Tasks.</div>";
    } 
    else if (!tname.value) 
    {
        error.innerHTML = "<div class='alert alert-danger'>Please fill in the To-Do Name.</div>";
    } 
    else if (!tasks.value)
    {
        error.innerHTML = "<div class='alert alert-danger'>Please fill in the To-Do Tasks.</div>";
    } 
    else 
    {
        arr.push({
            name: tname.value,
            tasks: tasks.value 
        });

        tname.value = "";
        tasks.value = "";

        error.innerHTML = "";

        allPost.innerHTML = "";
        display();
    }
});

function display() {
    arr.map(item => {
        allPost.innerHTML += `
        <div class="card mt-3" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">${item.tasks}</p>
              <button href="#" class="btn btn-success">Edit</button>
              <button href="#" class="btn btn-danger">Delete</button>
            </div>
        </div>
        `;
    });
}