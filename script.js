let open_btn = document.getElementById('open_btn');
let close_btn = document.getElementById('close_btn')
let modelContainer = document.getElementById('model_container');

console.log(close_btn);

open_btn.addEventListener('click',function(){
    modelContainer.style.display = 'block'
});

close_btn.addEventListener('click',function(){
    modelContainer.style.display = 'none';
})


window.addEventListener('click',function(e){
    if(e.target === 'modalContainer'){
        modelContainer.style.display = 'none';
    }
})