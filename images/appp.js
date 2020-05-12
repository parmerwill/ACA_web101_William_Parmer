console.log('hello')

let gallery=[
  {name: 'project 1',
   imgURL: './tictactoe.jpg'
  },
  {name: 'project 2',
   imgURL: './'
  },
  {name: 'project 3',
   imgURL: './'
  },
 {name: 'project 4',
  imgURL: './'
 },
 {name: 'project 5',
  imgURL: './'
 },
 {name: 'project 6',
  imgURL: './'
 },
 {name: 'project 7',
  imgURL: './'
 }
]
let galleryContainer = document.querySelector('.img')
console.log('galleryContainer', galleryContainer)

for (let index = 0; index < gallery.length; index++) {
  const element = gallery[index];
  console.log('element', element)
  let div = document.createElement('div')
  let imgdiv = document.createElement("img")
  imgdiv.src = element.imgURL
  div.appendChild(imgdiv)
  let name = document.createTextNode(element.name)
  div.appendChild(name)
  galleryContainer.appendChild(div)
}