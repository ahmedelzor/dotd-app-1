let addbtn = document.getElementById('addbtn');
let taskinput = document.getElementById('taskinput');
let notask = document.getElementById('notask');
let alltasks = document.getElementById('alltasks');
let message = document.getElementById('message');
let closevalidtionmasseg = document.getElementById('x');
let modalbtn = document.getElementById('modalbtn');
let modal = document.getElementById('modal');
let mood = document.getElementById('mood');
let div = document.querySelectorAll('div');

mood.onclick = function(){
    if(div[0].classList.contains('layout')){
        div[0].classList.toggle('dark');
        mood.classList = "fas fa-cloud-moon";
    }else{
        div[0].classList.toggle('dark');
        mood.classList = "fas fa-cloud-sun";
    }
    mood.addEventListener('click',function(){
        modalbtn.classList.toggle('modelbtn');
        mood.classList = "fas fa-cloud-moon";
    })
    mood.addEventListener('click',function(){
        div[2].classList.toggle('card2');
        mood.classList ="fas fa-cloud-sun";
    })

}

let closevalidtionmassegfunc = ()=>{
    message.classList.toggle('none')
}

let showmodal = ()=>{
    modal.classList.toggle('block');
}
modalbtn.addEventListener('click' ,showmodal )


let notaskshow = ()=>{
    if(alltasks.childElementCount > 0){
        notask.classList.add('none')
    }else{
        notask.classList.remove('none')
    }
}
let addtask = ()=>{
    let taskdata = taskinput.value
    if(taskdata.trim() == "" || taskinput.value.length < 3 || taskinput.value.length > 40){
        closevalidtionmassegfunc()
        
    }else{
        notask.classList.add('none');
        alltasks.innerHTML += `<div class="alert task alert-info">${taskdata}
        <i class=" delete fas fa-minus-circle mt-1" style= "float: right;"></i></div>`;
        taskinput.value = "";
        showmodal()

    }
    alltasks.addEventListener('click' ,function(e){
        if(e.target.classList.contains('task')){
            e.target.classList.toggle('chack');
        }
})
}
addbtn.addEventListener('click', addtask);

closevalidtionmasseg.addEventListener('click' , closevalidtionmassegfunc)

document.addEventListener('click' , (e)=>{
  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove()};
    notaskshow()
})

