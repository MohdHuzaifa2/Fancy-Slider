let arr = [
    {
      id: 1,
      image: './puma.jpg',
      color: '#9B89C5',
      text: 'Puma'
    },
    {
      id: 2,
      image: './nike.jpg',
      color: '#9FA051',
      text: 'Nike'
    },
    {
      id: 3,
      image: './yeeze.jpg',
      color: '#D7A594',
      text: 'Yeeze'
    }
  ];
  
let wrapper = document.querySelector('.slider-wrapper');
let buttons = document.querySelectorAll('button');
let index = 0;

function next() {
  let div = document.createElement('div');
  let text = document.createElement('span');
  div.classList.add('image');
  
  index = (index == arr.length-1) ? 0 : index + 1;
  
  text.innerText = arr[index].text;
  text.classList.add('text');
  text.classList.add('stroke');
  buttons.forEach((btn) => {
    btn.disabled = true;
  })
  
  
  
  wrapper.children[0].style.width = '60%';
  wrapper.children[0].style.height = '60%';
  wrapper.children[0].querySelector('.text').classList.add('stroke');
  
  setTimeout(() => {
    wrapper.children[0].style.left = '-100%';
    wrapper.style.backgroundColor = arr[index].color;
    
    wrapper.children[0].style.backgroundPositionX = '0%';
  }, 500)
  
  setTimeout(() => {
    wrapper.removeChild(wrapper.children[0]);
    
    div.style.width = '100%';
    div.style.height = '100%';
    text.classList.remove('stroke');
  },1500)
  
  setTimeout(() => {
    buttons.forEach((btn) => {
      btn.disabled = false;
    })
  },2000)
  
  
  div.style.width = '60%';
  div.style.height = '60%';
  div.style.left = '200%';
  
  setTimeout(() => {
    div.style.left = '50%';
  }, 500)
  
  
  
  
  div.appendChild(text);
  div.style.backgroundImage = `url(${arr[index].image})`;
  wrapper.appendChild(div);
}

function previous() {
  let div = document.createElement('div');
  let text = document.createElement('span');
  div.classList.add('image');
  
  index = (index == 0) ? arr.length-1 : index - 1;
  
  text.innerText = arr[index].text;
  text.classList.add('text');
  text.classList.add('stroke');
  buttons.forEach((btn) => {
    btn.disabled = true;
  })
  
  
  wrapper.children[0].style.width = '60%';
  wrapper.children[0].style.height = '60%';
  wrapper.children[0].querySelector('.text').classList.add('stroke');
  
  setTimeout(() => {
    wrapper.children[0].style.left = '200%';
    wrapper.style.backgroundColor = arr[index].color;
    
    wrapper.children[0].style.backgroundPositionX = '100%';
  }, 500)
  
  setTimeout(() => {
    wrapper.removeChild(wrapper.children[0]);
    
    div.style.width = '100%';
    div.style.height = '100%';
    text.classList.remove('stroke');
  },1500)
  
  setTimeout(() => {
    buttons.forEach((btn) => {
      btn.disabled = false;
    })
  },2000)
  
  div.style.width = '60%';
  div.style.height = '60%';
  div.style.left = '-200%';
  
  setTimeout(() => {
    div.style.left = '50%';
  }, 500)
  
  
  
  
  div.appendChild(text);
  div.style.backgroundImage = `url(${arr[index].image})`;
  wrapper.appendChild(div);
}