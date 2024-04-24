
$("document").ready(function () {
  $("#checkout").hide();
  //--- shopping cards generation
  var shoppingCartAdded = [];

  var shoppingCards = [
    {
      img:
        "https://lechateau.scene7.com/is/image/LeChateau/381724_010_3_300x400.jpg",
      "product-title": "Floral Print Chiffon V-Neck Dress",
      description: "STYLE: 381724",
      "original-rate": 150.0,
      "actual-rate": 75.0,
      message: "We’ve taken 50% off +BMSM Extra up to 40% off",
    },
    {
      img:
        "https://lechateau.scene7.com/is/image/LeChateau/369231_084_1_300x400.jpg",
      "product-title": "Metallic Knit Chenille Sweater",
      description: "STYLE: 369231",
      "original-rate": 59.95,
      "actual-rate": 35.97,
      message: "We’ve taken 40% off +BMSM Extra up to 40% off",
    },
    {
      img:
        "https://lechateau.scene7.com/is/image/LeChateau/364607_069_1_300x400.jpg",
      "product-title": "Off-The-Shoulder Sweater",
      description: "STYLE: 364607",
      "original-rate": 89.95,
      "actual-rate": 44.98,
      message: "We’ve taken 50% off +BMSM Extra up to 40% off",
    },
    {
      img:
        "https://lechateau.scene7.com/is/image/LeChateau/381741_502_2_300x400.jpg",
      "product-title": "Maroon short dress Floral Print",
      description: "STYLE: 381741",
      "original-rate": 99.95,
      "actual-rate": 49.98,
      message: "We’ve taken 50% off +BMSM Extra up to 40% off",
    },
  ];
  generateShoppingCards(shoppingCards);

  function generateShoppingCards(shoppingCards) {
    var length = shoppingCards.length;
    var htmlContent = "";
    for (var i = 0; i < length; i++) {
      htmlContent =
        htmlContent +
        '<div class="card" style="width: 15rem;">' +
        "<img src=" +
        '"' +
        shoppingCards[i]["img"] +
        '"' +
        ' class="card-img-top" alt="...">' +
        '<div class="card-body">' +
        '<h5 class="card-title">' +
        shoppingCards[i]["product-title"] +
        "</h5>" +
        '<p class="card-text">' +
        shoppingCards[i]["description"] +
        "</p>" +
        "</div>" +
        '<ul class="list-group list-group-flush">' +
        '<li class="list-group-item">' +
        " Orig $" +
        shoppingCards[i]["original-rate"] +
        "</li>" +
        '<li class="list-group-item price">' +
        "Now $" +
        shoppingCards[i]["actual-rate"] +
        "</li>" +
        '<li class="list-group-item">' +
        shoppingCards[i]["message"] +
        "</li>" +
        "</ul>" +
        ' <div class="card-body d-flex justify-content-center"> ' +
        "<button onclick=\"addToBag('" +
        shoppingCards[i]["product-title"] +
        "' ,'" +
        shoppingCards[i]["description"] +
        "','" +
        shoppingCards[i]["actual-rate"] +
        '\')" class="btn btn-md btn-warning add-to-bag">Add to Bag </button>' +
        "</div></div>";
    }
    $(".shopping-cart").html(htmlContent);
  }
});

// item cart generation

var cartHtmlContent = [];
var itemPrice = [];
var totalBill = 0;
var discount = 0;
function addToBag(title, text, price) {
  $("#empty").hide();
  //-- Cart generation
  cartHtmlContent.push(
    '<li class="list-group-item d-flex justify-content-between lh-sm">' +
      "<div>" +
      '<h6 class="my-0">' +
      title +
      "</h6>" +
      '<small class="text-muted">' +
      text +
      "</small>" +
      "</div>" +
      '<span> <label for="qty">Qty</label> <input type="text" size= "1" > </input> $ ' +
      price +
      "</span>" +
      "</li>"
  );
  $("#mycart").html(cartHtmlContent);
  //-- Total calculation
  itemPrice.push(price);

  for (var i = 0; i <= itemPrice.length - 1; i++) {
    var a = parseFloat(itemPrice[i]);
    totalBill = totalBill + a;
  }

  displayTotal(totalBill);
  displayPromocode(discount);
}

var discount = 0;
$(".redeem").click(function () {
  var promocode = $(".promo").val();

  if (promocode === "ABCD123") {
    discount = -5;
  } else if (promocode === "XYZ789") {
    discount = -10;
  } else if (promocode === "JKLM456") {
    discount = -15;
  } else {
    discount = 0;
  }
  totalBill = totalBill + discount;
  displayTotal(totalBill);
  displayPromocode(discount);
});

function displayPromocode(value) {
  var promocodeHtml =
    '<li class="list-group-item d-flex justify-content-between bg-light">' +
    ' <div class="text-success">' +
    '<h6 class="my-0"> Discount </h6>' +
    "</div>" +
    '<span class="text-success">' +
    value +
    "</span>" +
    "</li>";
  $("#promocode").html(promocodeHtml);
}
function displayTotal(total) {
  var totalHtmlValue =
    '<li class="list-group-item d-flex justify-content-between">' +
    "<span>Total (USD)</span>" +
    "<strong > $ " +
    total +
    "</strong>" +
    "</li>";

  $("#total").html(totalHtmlValue);
}

// cart button

$("#cart-button").click(function () {
  $("#home-page").hide();

  $("#checkout").show();
});

// Check out form input validation//
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
});
