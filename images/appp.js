console.log('hello')

let gallery=[
  {name: 'project 1',
   imgURL: './tictactoe.jpg',
   aURL:'https://parmerwill.github.io/ACA_web101_William_Parmer/ind.html'
  },
  {name: 'project 2',
   imgURL: './nasa.jpg',
   aURL:'https://parmerwill.github.io/ACA_web101_William_Parmer/src/nasa/nasa.html'
  },
  {name: 'project 3',
   imgURL: './calc.png',
   aURL:'https://parmerwill.github.io/calculator-app-101/in.html'
  },
 {name: 'project 4',
  imgURL: './',
  aURL:'#'
 },
 {name: 'project 5',
  imgURL: './',
  aURL:'#'
 },
 {name: 'project 6',
  imgURL: './',
  aURL:'#'
 },
 {name: 'project 7',
  imgURL: './',
  aURL:'#'
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
  imgdiv.classList.add("mystyle");
  let a = document.createElement("a")
  a.href = element.aURL
  a.appendChild(imgdiv)
  div.appendChild(a)
  let name = document.createTextNode(element.name)
  div.appendChild(name)
  galleryContainer.appendChild(div)
}