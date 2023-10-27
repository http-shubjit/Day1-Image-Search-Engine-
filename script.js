const Searchform=document.getElementById("Searchform")
const Searchbox=document.getElementById("Searchbox")
const searchresult=document.getElementById("searchresult")
const showmorebtn=document.getElementById("showmorebtn")

const accessKey="gthzr5vYpk7kRGh66MeOTecNe1kAIceoNkAmsYHzVcw"
let keyword=""
let page=1
async function searchimage(){
    keyword=Searchbox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response=await fetch(url);
    const data=await response.json()
if (page === 1){
    searchresult.innerHTML=""
}
    const results=data.results;


    results.map((result)=>{
        const image=document.createElement("img")
        image.src=result.urls.small;
        const imagelink=document.createElement("a")
        imagelink.href=result.links.html
        imagelink.target="_blank"
        imagelink.appendChild(image)
        searchresult.appendChild(imagelink)
    })

    showmorebtn.style.display='block'
}
Searchform.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchimage();

})
showmorebtn.addEventListener("click",()=>{
    page++;
    searchimage()
})