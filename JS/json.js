let main_cnt = document.getElementById("main_cnt")

fetch("https://dummyjson.com/products").then((e)=>{return e.json()}).then((e)=>{
    console.log(e)
    let all_products = e.products
    let json_data = JSON.stringify(all_products)
    localStorage.setItem("all_prod_json",json_data)


    all_products.forEach((v) => {
        let cnt = document.createElement("div")
        cnt.classList="cnt"
        let img_cnt = document.createElement("div")
        img_cnt.classList = "img_cnt"
        let img = document.createElement("img")
        img.classList="img"
        img.src=(v.images[0])
        let products_name = document.createElement("h4")
        products_name.textContent=v.title
        let para = document.createElement("p")
        para.textContent = v.category
        img_cnt.appendChild(img)
        img_cnt.appendChild(products_name)
        img_cnt.appendChild(para)
        let btn_cnt = document.createElement("div")
        btn_cnt.classList = "btn_cnt"
        let bnb = document.createElement("button")
        bnb.classList = 'bnb'
        bnb.textContent = "Buy Now"
        let vma = document.createElement("a")
        vma.classList.add("bnb")
        vma.textContent = "View More"
        vma.href="product.html"
        vma.target = "blank"
        vma.addEventListener("click",()=>{
            viewMore(v.id)
            
        })
        main_cnt.appendChild(cnt)
        cnt.appendChild(img_cnt)
        cnt.appendChild(btn_cnt)
        btn_cnt.appendChild(bnb)
        btn_cnt.appendChild(vma)
    });
})

function viewMore(id) {
    localStorage.setItem("id",id)
}