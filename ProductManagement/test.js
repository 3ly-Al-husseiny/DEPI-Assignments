// Update Product 

function showUpdateModal(index) 
{
    var modal = document.getElementById('updateModal');
    modal.style.display = 'flex';
    
    // Fill form with current product data
    document.getElementById('updateName').value = proContainer[index].name;
    document.getElementById('updatePrice').value = proContainer[index].price;
    document.getElementById('updateCategory').value = proContainer[index].category;
    document.getElementById('updateDesc').value = proContainer[index].desc;

    // Remove previous listeners by replacing buttons
    var saveBtn = document.getElementById('saveUpdate');
    var cancelBtn = document.getElementById('cancelUpdate');
    var newSaveBtn = saveBtn.cloneNode(true);
    var newCancelBtn = cancelBtn.cloneNode(true);
    saveBtn.parentNode.replaceChild(newSaveBtn, saveBtn);
    cancelBtn.parentNode.replaceChild(newCancelBtn, cancelBtn);

    // Save updated product
    newSaveBtn.onclick = function() {
        proContainer[index].name = document.getElementById('updateName').value;
        proContainer[index].price = document.getElementById('updatePrice').value;
        proContainer[index].category = document.getElementById('updateCategory').value;
        proContainer[index].desc = document.getElementById('updateDesc').value;
        
        // Save to localStorage
        localStorage.setItem("Products", JSON.stringify(proContainer));
        disPro();
        modal.style.display = 'none';
    };
    
    // Cancel update
    newCancelBtn.onclick = function() {
        modal.style.display = 'none';
    };
}


var proName =  document.getElementById("proName");
var proPrice =  document.getElementById("proPrice");
var proCategory =  document.getElementById("proCategory");
var proDesc =  document.getElementById("proDesc");
var btn =  document.getElementById("btn");
console.log(btn);
var proContainer = []









// Save Products to the localStorage
btn.onclick = function(){

    var pro= {
        name:proName.value,
        price:proPrice.value,
        category:proCategory.value,
        desc:proDesc.value,
    }
}


// Load products from localStorage if available 
if (JSON.parse(localStorage.getItem("Products")) != null) {
    proContainer = JSON.parse(localStorage.getItem("Products"));
    disPro();
}



//    console.log(pro);
   proContainer.push(pro);
    // Save products to localStorage
    localStorage.setItem("Products", JSON.stringify(proContainer));
   disPro();
   console.log(proContainer);


// Display Products 

function disPro()
{
    var AllPro = ``;
    for(let i = 0; i < proContainer.length; i++){
        AllPro += `
        <tr>
            <td>${i + 1}</td>
            <td>${proContainer[i].name}</td>
            <td>${proContainer[i].price}</td>
            <td>${proContainer[i].category}</td>
            <td>${proContainer[i].desc}</td>
                        <td>
                            <button class="btn delete" onclick="DelPro(${i})">Delete</button>
                            <button class="btn update" onclick="showUpdateModal(${i})">Update</button>
                        </td>
        </tr>
        `;
    }
    console.log(AllPro);
    document.getElementById("tbody").innerHTML = AllPro;
}


// Delete Product 

function DelPro(index)
{
    proContainer.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(proContainer));
    disPro();
}



// Search Product 

function SearchPro(proName)
{
    var filteredProducts = proContainer.filter(function(product) {
        return product.name.toLowerCase().includes(proName.toLowerCase());
    });
    var AllPro = ``;
    for(let i = 0; i < filteredProducts.length; i++){
        AllPro += `
        <tr>
            <td>${i + 1}</td>
            <td>${filteredProducts[i].name}</td>
            <td>${filteredProducts[i].price}</td>
            <td>${filteredProducts[i].category}</td>
            <td>${filteredProducts[i].desc}</td>
        </tr>
        `;
    }
    document.getElementById("tbody").innerHTML = AllPro;
}