
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");

let myLeads = [];
const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))
function renderLeads(){
  let listItems = ''
   for(let i=0;i<myLeads.length;i++){
         listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
  ulEl.innerHTML = listItems
}
inputBtn.addEventListener("click", function() {
     let input = inputEl.value 
      myLeads.push(input)
    localStorage.setItem('myleads',JSON.stringify(myLeads))
 inputEl.value = ''
 renderLeads()
});
deleteBtn.addEventListener('click',function(){
  myLeads = []
  localStorage.clear()
  renderLeads()
})
