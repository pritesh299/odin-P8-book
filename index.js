
/* documentation alert so that I could easily understant my code

addBook view is the display where we addd a new book by clickig on add book btn located below library headline.
library view is th display of various books (also denoted by card cause i was incositance writing documentation) in library.
*/

const CardContainer=document.getElementById("Card_container")
const BookAddBtn=document.getElementById("addBookBtn")
const overlay=document.querySelector('.overlay')
const BookCreateBtn=document.getElementById("CreateBook")
const Books=document.getElementById("books")
const BookAddContainer=document.getElementById('addBook_container')
let library=[];

//changes the library view to addBook view
BookAddBtn.addEventListener('click',f=()=>{
      BookAddBtn.removeEventListener('click',f)
     BookAddContainer.style.transform="translate(-50%, -50%) scale(1)"
     overlay.style.display="block"

})
// returns back to library view from addBook view
overlay.addEventListener('click',()=>{
   BookAddContainer.style.transform="translate(-50%, -50%) scale(0)"
   overlay.style.display="none"
   BookAddBtn.addEventListener('click',f)//f is declared in line 17 inside BookAddBtn eventlistner

})


function book(name,auhtor,pageCount,readStatus){  //constuctor 
   this.name=name;
   this.auhtor=auhtor;
   this.pageCount=pageCount;
   this.readStatus=readStatus;
}


document.querySelector('form').addEventListener('submit',(e)=>{
   e.preventDefault()//-->to avoid refreshing of page when form is submitted
   addBookToLibrary()
 })

 function addBookToLibrary(){

    //fetching data and storing in local variables
   let name=document.getElementById('bookTitle').value
   let auhtor=document.getElementById('authorName').value
   let pageCount=document.getElementById('pageCount').value
   let readStatus=document.getElementById('readStatus').checked

   //creates a temporay book and stores in local object
    let CurrentBook= new book(name,auhtor,pageCount,readStatus)
    library.push(CurrentBook)//stores th temporary book  to library array

    overlay.click()//to exit the addBook view to libaryDisplay view
    document.querySelector('form').reset()//clears the text in input
     CreatCard(library.length)
}

function CreatCard(index){
       
   //creates card and its elements
   let div = document.createElement('div')
   let  BookTittle = document.createElement('h2')
   let  authorName= document.createElement('p')
   let  pageCount= document.createElement('p')
   let  readStatus= document.createElement('button')
   let  deleteBtn= document.createElement('button')

    //adds  unique id/class on created elements
   div.classList.add('card')
   readStatus.classList.add('isRead')
 
  //appends created card elements to card 
   div.appendChild(BookTittle)
   div.appendChild(authorName)
   div.appendChild(pageCount)
   div.appendChild(readStatus)
   div.appendChild(deleteBtn)
   CardContainer.appendChild(div)
    
   //adds default text to newly created elements
   deleteBtn.innerText="Delete"  
   BookTittle.innerText= library[index-1].name
   authorName.innerText="Author: "+library[index-1].auhtor
   pageCount.innerText= "Pages: "+library[index-1].pageCount
      
   //displayes read Status on card based on given info
   if(library[index-1].readStatus){
      readStatus.innerText='Read'
      readStatus.style.backgroundColor=" #1B9AAA"
   }
    else{
      readStatus.style.backgroundColor=" #D90429"
      readStatus.innerText='Not Read'
    }
    
    changeColor(readStatus)//adds functionilty to change readStatus on card
    deleteCard(deleteBtn,div,index)//adds functionilty to delete the card 
}

function changeColor(readStatus){

    readStatus.addEventListener('click',()=>{
      if( readStatus.innerText==='Not Read'){
        readStatus.style.backgroundColor=" #1B9AAA";
        readStatus.innerText='Read';
      }
      else  if( readStatus.innerText==='Read') {
         readStatus.style.backgroundColor="#D90429";
         readStatus.innerText='Not Read';
      }
    })
}

function deleteCard(deleteBtn,div,index){
  
   deleteBtn.addEventListener('click',()=>{
     library.pop(index-1)//removes data of the seltected card from array
     div.remove()//removes the div(node) asociated with the delete btn along with it's child elements
   })
}