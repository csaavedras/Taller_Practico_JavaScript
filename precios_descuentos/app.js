// Formula descuento
// (precio * (100- descuento))/100

const apply_btn = document.querySelector("#apply_btn");
const inputDescount = document.querySelector("#descount");
const inputPrice = document.querySelector("#price").textContent;
const titlePrice = document.querySelector("#currency");
const discountContainer = document.querySelector(".discount_content");
const maxDescount = 50;
const onlyNum = /^[0-9]+$/;

const descountPrice = (price, descount) => {
  let newPrice = (price * (100 - descount)) / 100;
  return newPrice;
};

const convertStringtoNum = (str) => {
  return str.replaceAll(".", "");
};

const currencyChile = new Intl.NumberFormat("es-CL", {
  currency: "CLP",
  style: "currency",
});

const showDescount = () => {
  if (descount.value > maxDescount) {
    alert(`El valor maximo para descuento es ${maxDescount}%`);
    descount.value = "";
  } else if (descount.value.match(onlyNum)) {
    let descountProduct = parseInt(inputDescount.value);
    let price = convertStringtoNum(inputPrice);
    let newPrice = descountPrice(price, descountProduct);

    titlePrice.remove();
    discountContainer.remove();
    document.querySelector("#price").textContent =
      currencyChile.format(newPrice);
    descount.value = "";
  } else {
    alert("Solo ingrese numeros");
  }
};

apply_btn.addEventListener("click", showDescount);
