const CardContainer=document.getElementById("Card_container")
const BookAdd=document.getElementById("addBook")
let library=[];
let BookNumber=library.length;

function book(name,auhtor,pages,readStatus){  //constuctor 
   this.name=name;
   this.auhtor=auhtor;
   this.pages=pages;
   this.readStatus=readStatus;
}

function addBook(x){
      
    let CurrentBook= new book(name,auhtor,pages,readStatus)
    library.push(CurrentBook)
    for(let i=0;i<x;i++){
    console.log(library[i])
    }
}

function CreatCard(){

   let div = document.createElement('div')
   let  BookTittle = document.createElement('h2')
   let  authorName= document.createElement('p')
   let  Pages= document.createElement('p')
   let  readStatus= document.createElement('p')
  
   div.classList.add('card')
   BookTittle.setAttribute('id',`book_tittle_${BookNumber+1}`)
   authorName.setAttribute('id',`author_name_${BookNumber+1}`)
   Pages.setAttribute('id',`Pages_${BookNumber+1}`)
   readStatus.setAttribute('id',`read_Status_${BookNumber+1}`)

   div.appendChild(BookTittle)
   div.appendChild(authorName)
   div.appendChild(Pages)
   div.appendChild(readStatus)
   CardContainer.appendChild(div)
   addBook(BookNumber)

}

function editCard(i){


}