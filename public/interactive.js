const search = document.getElementById("productSearch");
const searchDiv = document.querySelector(".searchDiv")
search.addEventListener("input", async (e) => {
    const query = e.target.value;
    if(query !== ""){
        const response = await fetch(`/admin/products/searchByName?product=${String("^"+query)}`);
        const products = await response.json();
    
        if(products.found[0] !== undefined){
            console.log(products.found[0]);
            console.log(products.found[0].name);
            searchChild(products.found[0].name);
    }}else if(e.target.value.trim() == ""){
        console.log("rm")
        while (searchDiv.childElementCount>1) {
            searchDiv.removeChild(searchDiv.children[1]);
        }
    }
    
    
    
});

function searchChild(products){
    // searchDiv.removeChild("*")
    console.log(products)
    const child = document.createElement("button");
    child.innerHTML=`<button onclick="searchButton(child)">${products}</button>`
    child.addEventListener("click",()=>{searchButton(products)})
    child.textContent =(products);
    const br = document.createElement("br");
    if(child.textContent !== ""){
        searchDiv.appendChild(child)
        searchDiv.appendChild(br)
    }
    
}
async function searchButton(product){
    console.log(product)
    // const response = await fetch(`/admin/products/search?product=${String("^"+search.value)}`);
    // const products = await response.json();
    console.log('hi')
    window.location.href = `/admin/products/search?product=${product}`;

}