const btn = document.querySelector('.click');
btn.addEventListener('click', ()=>{
    btn.classList.add('hide')
    document.querySelector('.row').classList.add('show');
    document.querySelector('.footer').classList.add('show');
    document.querySelector('.creat').classList.remove('hide');
    
})

document.querySelector('.creat').addEventListener('click', ()=>{
    document.querySelector('.form').classList.add('show');
    document.querySelector('.creat').classList.add('hide')
})


function creatfun(){

    let card = document.createElement('div');
    let heading = document.createElement('h2');
    let description = document.createComment('h5');
    let imgsec = document.createElement('div');
    //let img = document.createElement('img');
    let para = document.createElement('p');

    card.classList.add('card')
    imgsec.classList.add('fakeimg');

    let headingin = document.querySelector('.heading');
    let descriptionin = document.querySelector('.description');
    let imgin = document.querySelector('.fil');
    let content = document.querySelector('.content');

   
   heading.innerText = headingin.value;
   description.innerText = descriptionin.value
  // img.src = imgin.value;
   para.innerText = content.value;

  // imgsec.appendChild(img);
   card.appendChild(heading);
   card.appendChild(description);
   card.appendChild(imgsec);
   card.appendChild(para);

   document.querySelector('.leftcolumn').appendChild(card);
 //  document.querySelector('.leftcolumn').prepend(card);


   document.querySelector('.form').classList.add('hide');

   document.querySelector('.row').classList.add('showa')

}

document.querySelector('#apply').addEventListener('click', creatfun);