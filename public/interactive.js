const search = document.getElementById("productSearch");
const searchDiv = document.querySelector(".searchDiv")
search.addEventListener("input", async (e) => {
    const query = e.target.value;
    if(query.trim() !== ""){
        const response = await fetch(`/admin/products/searchByName?product=${String(query)}`);
        const products = await response.json();
        console.log(products)
    
        if(products.found[0] !== undefined){
            searchChild(products);
    }}else if(e.target.value.trim() == ""){
        console.log("rm")
        while (searchDiv.childElementCount>1) {
            searchDiv.removeChild(searchDiv.children[1]);
        }
    }
    
    
    
});

function searchChild(products){
    // searchDiv.removeChild("*")
    console.log(products.found.length)
    for(let i =0;i<products.found.length;i++){
        let product = products.found[i].name
        const child = document.createElement("button");
    child.innerHTML=`<button onclick="searchButton(child)">${product}</button>`
    child.addEventListener("click",()=>{searchButton(product.trim())})
    child.textContent =(product);
    const br = document.createElement("br");
    // if(child.textContent !== "" && !searchDiv.contains(child)){
    //     searchDiv.append(child)
    //     searchDiv.appendChild(br)
    // }
    const exists = [...searchDiv.children].some(
    element => element.textContent === child.textContent
);

if (child.textContent.trim !== "" && !exists) {
    searchDiv.appendChild(child);
    searchDiv.appendChild(br);
}
    }
    
    
}
async function searchButton(product){
    console.log(product)
    // const response = await fetch(`/admin/products/search?product=${String("^"+search.value)}`);
    // const products = await response.json();
    console.log('hi')
    window.location.href = `/admin/products/search?product=${product}`;

}