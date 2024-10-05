// VARS ***** ***** *****
const objList = [
    {   image: {
            thumbnail: "./asset/images/image-waffle-thumbnail.jpg",
            desktop: "./asset/images/image-waffle-desktop.jpg"
        },
        name: "Waffle with Berries", category: "Waffle", 
        price: "6.50", count: 0
    },
    {   image: {
            thumbnail: "./asset/images/image-creme-brulee-thumbnail.jpg",
            desktop: "./asset/images/image-creme-brulee-desktop.jpg"
        },
        name: "Vanilla Bean Crème Brûlée", category: "Crème Brûlée", 
        price: "7.00", count: 0
     },
     {  image: {
            thumbnail: "./asset/images/image-macaron-thumbnail.jpg",
            desktop: "./asset/images/image-macaron-desktop.jpg"
        },
        name: "Macaron Mix of Five", category: "Macaron", 
        price: "8.00", count: 0
     },
     {  image: {
            thumbnail: "./asset/images/image-tiramisu-thumbnail.jpg",
            desktop: "./asset/images/image-tiramisu-desktop.jpg"
        },
        name: "Classic Tiramisu", category: "Tiramisu", 
        price: "5.50", count: 0
     },
     {  image: {
            thumbnail: "./asset/images/image-baklava-thumbnail.jpg",
            desktop: "./asset/images/image-baklava-desktop.jpg"
        },
        name: "Pistachio Baklava", category: "Baklava", 
        price: "4.00", count: 0
     },
     {  image: {
            thumbnail: "./asset/images/image-meringue-thumbnail.jpg",
            desktop: "./asset/images/image-meringue-desktop.jpg"
        },
        name: "Lemon Meringue Pie", category: "Pie", 
        price: "5.00", count: 0
     },
     {  image: {
            thumbnail: "./asset/images/image-cake-thumbnail.jpg",
            desktop: "./asset/images/image-cake-desktop.jpg"
        },
        name: "Red Velvet Cake", category: "Cake", 
        price: "4.50", count: 0
     },
     {  image: {
            thumbnail: "./asset/images/image-brownie-thumbnail.jpg",
            desktop: "./asset/images/image-brownie-desktop.jpg"
        },
        name: "Salted Caramel Brownie", category: "Brownie", 
        price: "4.50", count: 0
     },
     {  image: {
            thumbnail: "./asset/images/image-panna-cotta-thumbnail.jpg",
            desktop: "./asset/images/image-panna-cotta-desktop.jpg"
        },
        name: "Vanilla Panna Cotta", category: "Panna Cotta", 
        price: "6.50", count: 0
     }
];
// VARS ***** ***** *****



// FUNCTIONS ***** ***** *****
function btnShowHide() {
    objList.forEach( (obj,idx) => {
        if (obj.count > 0) {
            $(`.obj.idx${idx} .btnType1`).hide();
            $(`.obj.idx${idx} .btnType2`).show();
        } else {
            $(`.obj.idx${idx} .btnType1`).show();
            $(`.obj.idx${idx} .btnType2`).hide();
        }
    } );
}

function btnType1Click(idx) {
    btnType2Plus(idx);
}
function btnType2Min(idx) {
    objList[idx].count--;
    htmlItems();
    htmlAside();
}
function btnType2Plus(idx) {
    objList[idx].count++;
    htmlItems();
    htmlAside();
}
function btnX(idx) {
    objList[idx].count = 0;
    htmlItems();
    htmlAside();
    htmlPopup();
}

function confirmOrder() {
    $("#POPUP").addClass("active");
    $("body").addClass("popup");
    htmlPopup();
}
function newOrder() {
    $("#POPUP").removeClass("active");
    $("body").removeClass("popup");
    objList.forEach( (obj) => {obj.count = 0;} );
    htmlItems();
    htmlAside();
    htmlPopup();
}

// ITEMS *****
function htmlItems() {
    $("#ITEMS > *").remove();
    let listElem_li = "";

    // Make Element li
    objList.forEach( (obj,idx) => {
        listElem_li += `
            <li class="obj idx${idx}">
                <span class="img" style="background-image: url(${obj.image.desktop})"></span>
                
                <div class="texts">
                    <p class="category">${obj.category}</p>
                    <p class="name">${obj.name}</p>
                    <p class="price">$${obj.price}</p>
                </div>

                <button type="button" class="btnType1" onclick="btnType1Click(${idx})">
                    <img src="./asset/images/icon-add-to-cart.svg" alt="ICON" />
                    <p class="text">Add to Cart</p>
                </button>

                <div class="btnType2">
                    <button type="button" onclick="btnType2Min(${idx})" class="btnMin"><img src="./asset/images/icon-decrement-quantity.svg" alt="ICON" /></button>
                    <p class="count">${obj.count}</p>
                    <button type="button" onclick="btnType2Plus(${idx})" class="btnPlus"><img src="./asset/images/icon-increment-quantity.svg" alt="ICON" /></button>
                </div>
            </li>
        `;
    });

    // Append All Element
    $("#ITEMS").append(`
        <b class="title">Dessert</b>
        <ul class="list">
            ${listElem_li}
        </ul>
    `);

    btnShowHide();
}
// ASIDE *****
function htmlAside() {
    $("#ASIDE").removeClass("empty");
    $("#ASIDE > *").remove();
    $(`#ITEMS .obj span.img`).removeClass("active");
    let isEmpty = true;
    let listElem_li = "";
    let ttlVal = 0;
    let ttlPriceAll = 0;

    // Make Element li
    objList.forEach( (obj,idx) => {
        if (obj.count > 0) {
            isEmpty = false;
            $(`#ITEMS .obj.idx${idx} span.img`).addClass("active");
            listElem_li += `
                <li class="obj idx${idx}">
                    <p class="name">${obj.name}</p>
                    <span>
                        <p class="count">${obj.count}x</p>
                        <p class="price">@$${obj.price}</p>
                        <p class="ttlPrice">$${(Number(obj.count) * Number(obj.price)).toFixed(2)}</p>
                    </span>
                    <button type="button" onclick="btnX(${idx})" class="btnX">X</button>
                </li>
            `;
            ttlVal += Number(obj.count);
            ttlPriceAll += (Number(obj.count) * Number(obj.price));
        }
    } );

    // Append All Element
    if (isEmpty) {
        $("#ASIDE").addClass("empty");
        $("#ASIDE").append(`
            <b class="title">Your Cart (${ttlVal})</b>
            <img src="./asset/images/illustration-empty-cart.svg" alt="ICON"/>
            <p>Your added items will appear here</p>
        `);
    } else {
        $("#ASIDE").append(`
            <b class="title">Your Cart (${ttlVal})</b>
            <ul class="list">${listElem_li}</ul>

            <section class="section1">
                <p class="text1">Order Total</p>
                <b class="ttlPriceAll">$${ttlPriceAll.toFixed(2)}</b>
            </section>

            <section class="section2">
                <img src="./asset/images/icon-carbon-neutral.svg" alt="Icon" />
                <p class="text2">This is a <span>carbon-neutral</span> delivery</p>
            </section>

            <button type="button" onclick="confirmOrder()" class="btnConfirm">Confirm Order</button>
        `);
    }

}
// POPUP *****
function htmlPopup() {
    $("#POPUP > *").remove();
    let listElem_li = "";
    let ttlPriceAll = 0;

    // Make Element li
    objList.forEach( (obj) => {
        if (obj.count > 0) {
            listElem_li += `
                <li class="obj">
                    <img src="${obj.image.thumbnail}" alt="Icon" />
                    <div class="texts">
                        <b class="name">${obj.name}</b>
                        <span>
                            <b class="count">${obj.count}x</b>
                            <p class="price">$${obj.price}</p>
                        </span>
                    </div>
                    <b class="ttlPrice">${(Number(obj.count) * Number(obj.price)).toFixed(2)}</b>
                </li>
            `;
            ttlPriceAll += Number(obj.count) * Number(obj.price);
        }
    } );

    // Append All Element
    $("#POPUP").append(`
        <content>
            <img src="./asset/images/icon-order-confirmed.svg" alt="ICON" />
            
            <section class="title">
                <b>Order Confirmed</b>
                <p>We have you enjoy your food!</p>
            </section>
            
            <ul class="list">${listElem_li}</ul>

            <section class="total">
                <p>Order Total</p>
                <b>$${ttlPriceAll.toFixed(2)}</b>
            </section>

            <button type="button" onclick="newOrder()">Start New Order</button>
        </content>    
    `);
}
// FUNCTIONS ***** ***** *****



// CALLS & EVENTS ***** ***** *****
htmlItems();
htmlAside();

// CALLS & EVENTS ***** ***** *****
