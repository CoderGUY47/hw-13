let allPost = document.querySelector(".allPost");
let tname = document.querySelector(".tname");
let tasks = document.querySelector(".tasks");
let postBtn = document.querySelector(".postBtn");
let error = document.querySelector(".error");
let arr = [];

postBtn.addEventListener("click",function(){
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
              <button href="#" class="btn btn-success edt">Edit</button>
              <button href="#" class="btn btn-danger dlt">Delete</button>
            </div>
        </div>
        `;
    });
    let dltBtn=document.querySelectorAll(".dlt") //given seletrALL ,it gives Nodelist in console, so convert to Array to store multiple data , and do map
    let dltBtnConvert=Array.from(dltBtn)
    dltBtnConvert.map((item,index)=>{
        item.addEventListener("click", function(){
            arr.splice(index,1);
            allPost.innerHTML="" //nd to wrt it again for updat the data, neither it will show the previous data with present data
            display();
        })
    })

}



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


