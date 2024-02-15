window.scrollTo(0,0)
const scrolls = document.getElementsByClassName('product-displays');
let scrollsObject = [];
for (let i = 0; i < scrolls.length; i++) {
  scrollsObject.push((i - 1) * 250);
}
let scrollX = 250;
class Product {
  constructor(src, name, price, description) {
    this.img = src;
    this.name = name;
    function separate(number) {
      for (let i = number.length - 3; i > 0; i-=3) {
        console.log(i)
        number = number.split('');  
        number.splice( i , 0, "," );
        number = number.join('');
        console.log(number);
      }
      console.log(number);
      return number;
    }
    
    const separatedPrice = separate(price + '');
    this.price = '-$' + separatedPrice + '-';
    this.description = description;
  }
}
const products = [
  new Product("./display/armor.png","Armour Of Achilles",10000.00,"Why the armor didn't protect his ankle, I don't know"), 
  new Product("./display/lightning.png","Zeus's Lightning Bolt",125000.00,"And along came Zeus"), 
  new Product("./display/chariot.jpeg","Pegasus Charriot",20,"I know there are better methods of travel in this day and age, but this one's an antique."), 
  new Product("./display/habanaro.webp","Arrows of Archimedes",7500,"Why couldn't the pepper practice archery? Because he didn't habanaro! $7,500 because that joke was so good."), 
  new Product("./display/happy_customer.jpg","Hera's Normal Throne",50000,"Comes with a complimentary Hera"), 
  new Product("./display/wings.jpeg","Helm of Hermes",350000,"Yes, you can buy the mystical flying helm of Hermes. No, you can't question it."),
  new Product("./display/not_a_reference.png","Cobble Crusher",1530,"This is NOT a reference to the Legend of Zelda; Tears of the Kingdom")
];

for (let i = 0; i < scrolls.length; i++) {
  const name = document.createElement("span");
  name.innerHTML = products[i].name;
  name.className = "p-name"
  scrolls[i].appendChild(name);
  
  const para = document.createElement("p");
  para.innerHTML = products[i].description + "<br>" + products[i].price; 
  para.className = "p-para"
  scrolls[i].appendChild(para);

  scrolls[i].style.backgroundImage = `url("${products[i].img}")`
  const styleScroll = ((scrollX + (i * 250)) % (scrolls.length * 250)) - 250 + "px";
  scrolls[i].animate(
    { transform: `translate(${styleScroll}, 0)` }, 
    { duration: 0, fill: 'forwards'}
  )
}

dragElement(document.getElementById("product-bar"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos2 = e.clientX;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos2 - e.clientX;
    pos2 = e.clientX;
    scrollX = scrollX - pos1
    // console.log(scrollX)
    scroll();
  }
}

function scroll() {
  for (let i = 0; i < scrolls.length; i++) {
    let styleScroll = ((scrollX + (i * 250)) % (scrolls.length * 250)) - 250;
    if (scrollX <= 0) {
      console.log("gay");
      styleScroll += (scrolls.length * 250);
      scrollX += (scrolls.length * 250)
    }

    scrolls[i].animate({ transform: `translate(${styleScroll + "px"},0)`}, { duration: 0, fill: "forwards" })
  }
}

function closeDragElement() {
  document.onmouseup = null;
  document.onmousemove = null;
}

document.getElementById("product-bar").addEventListener("wheel", (event) => {
  console.log(event)
  scrollX += event.deltaY;
  scroll();
})

function forceScroll() {
  scrollX += 250;
  for (let i = 0; i < scrolls.length; i++) {
    let styleScroll = ((scrollX + (i * 250)) % (scrolls.length * 250)) - 250;
    if (scrollX <= 0) {
      styleScroll += (scrolls.length * 250);
      scrollX += (scrolls.length * 250)
    }

    scrolls[i].animate({ transform: `translate(${styleScroll + "px"},0)`}, { duration: 250, fill: "forwards", easing: "ease-out"})
  }
}
function alertPawPatrol() {
  alert('Informing the Paw Patrol that you need help...');
  alert('...');
  if (Math.round(Math.random()) == 1) {
    alert("They don't care")
  } else {
    alert('They say to just browse, and you can scroll through the product list with your mouse');
  }
}