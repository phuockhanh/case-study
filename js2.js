window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
class products{
	constructor(image,title,stars,content,footer){
		this.image = image;
		this.title = title;
		this.stars = stars;
		this.content = content;
		this.footer = footer;
	}
}
let product1 = new products('image2/img1-product.jpg',
							'<a href=#>Spezial</a>',
							'fas fa-star',
							'<span>ab <strong>7,99 €</strong></span><br> Enthält 20% MwSt.<br><small>(15,98 € / 1 kg)</small><br>zzgl.<a href=#>  Versand</a>',
							'AUSFÜHRUNG WÄHLEN');
let product2 = new products('image2/img2-product.jpg',
							'<a href=#>Caffè Crema Bio</a>',
							'fas fa-star',
							'<span>ab <strong>8,99 €</strong></span><br> Enthält 20% MwSt.<br>zzgl.<a href=#> Versand</a>',
							'AUSFÜHRUNG WÄHLEN');
let product3 = new products('image2/img3-product.jpg',
							'<a href=#>Alles Arabica</a>',
							'fas fa-star',
							'<span>ab <strong>8,99 €</strong></span><br> Enthält 20% MwSt.<br><small>(15,98 € / 1 kg)</small><br> zzgl.<a href=#> Versand</a>',
							'AUSFÜHRUNG WÄHLEN');
let product4 = new products('image2/img4-product.jpg',
							'<a href=#>Spezial gemahlen</a>',
							'fas fa-star',
							'<span>ab <strong>7,99 €</strong></span><br> Enthält 20% MwSt.<br><small>(15,98 € / 1 kg)</small><br>zzgl.<a href=#>  Versand</a>',
							'AUSFÜHRUNG WÄHLEN');
let product5 = new products('image2/img5-product.jpg',
							'<a href=#>Caffè Crema Classico</a>',
							'fas fa-star',
							'<span>ab <strong>8,99 €</strong></span><br> Enthält 20% MwSt.<br><small>(15,98 € / 1 kg)</small><br>zzgl.<a href=#>  Versand</a>',
							'AUSFÜHRUNG WÄHLEN');
let product6 = new products('image2/img6-product.jpg',
							'<a href=#>Bremer</a>',
							'fas fa-star',
							'<span>ab <strong>6,99 €</strong></span><br> Enthält 20% MwSt.<br><small>(13,98 € / 1 kg)</small><br>  zzgl.<a href=#> Versand</a>',
							'AUSFÜHRUNG WÄHLEN');
let product7 = new products('image2/img7-product.jpg',
							'<a href=#>Spezial (Softpads)</a>',
							'&nbsp','<span>ab <strong>3,99 €</strong></span><br> Enthält 20% MwSt.<br><small>(31,16 € / 1 kg)</small><br>zzgl.<a href=#>  Versand</a>',
							'AUSFÜHRUNG WÄHLEN');
let product8 = new products('image2/img8-product.jpg',
							'<a href=#>Caffè Crema Intenso</a>',
							'fas fa-star',
							'<span>ab <strong>15,99 €</strong></span><br> Enthält 20% MwSt.<br><small>(15,98 € / 1 kg)</small><br>zzgl.<a href=#>  Versand</a>',
							'AUSFÜHRUNG WÄHLEN');
let product9 = new products('image2/img9-product.jpg',
							'<a href=#>Alles Arabica gemahlen</a>',
							'fas fa-star',
							'<span>ab <strong>7,99 €</strong></span><br> Enthält 20% MwSt.<br><small>(15,98 € / 1 kg)</small><br>zzgl.<a href=#>  Versand</a>',
							'AUSFÜHRUNG WÄHLEN');
let product10 = new products('image2/img10-product.jpg',
							'<a href=#>Entcoff</a>',
							'fas fa-star',
							'<span>ab <strong>7,99 €</strong></span><br> Enthält 20% MwSt.<br><small>(15,98 € / 1 kg)</small><br>zzgl.<a href=#>  Versand</a>',
							'AUSFÜHRUNG WÄHLEN');
let product11 = new products('image2/img11-product.jpg',
							'<a href=#>Bremer gemahlen</a>',
							'&nbsp',
							'<span>ab <strong>6,99 €</strong></span><br> Enthält 20% MwSt.<br><small>(13,98 € / 1 kg)</small><br> zzgl.<a href=#>  Versand</a>',
							'AUSFÜHRUNG WÄHLEN');
let product12 = new products('image2/img12-product.jpg',
							'<a href=#>Alles Bio',
							'fas fa-star</a>',
							'<span>ab <strong>8,99 €</strong></span><br> Enthält 20% MwSt.<br><small>(17,98 € / 1 kg)</small><br> zzgl.<a href=#> Versand</a>',
							'AUSFÜHRUNG WÄHLEN');
let product13 = new products('image2/img13-product.jpg',
							'<a href=#>Entcoff gemahlen</a>',
							'&nbsp',
							'<span>ab <strong>7,99 €</strong></span><br> Enthält 20% MwSt.<br><small>(15,98 € / 1 kg)</small><br> zzgl.<a href=#> Versand</a>',
							'AUSFÜHRUNG WÄHLEN');
let product14 = new products('image2/img14-product.jpg',
							'<a href=#>BIO Schwarztee</a>',
							'fas fa-star',
							'<span>ab <strong>9,98 €</strong></span><br> Enthält 20% MwSt.<br><small>(15,97 € / 1 kg)</small><br>  zzgl.<a href=#> Versand</a>',
							'AUSFÜHRUNG WÄHLEN');
let product15 = new products('image2/img15-product.jpg',
							'<a href=#>BIO Kräutertee</a>',
							'fas fa-star',
							'<span>ab <strong>9,98 €</strong></span><br> Enthält 20% MwSt.<br><small>(19,96 € / 1 kg)</small><br> zzgl.<a href=#> Versand</a>',
							'AUSFÜHRUNG WÄHLEN');
let productList = [product1,product2,product3,product4,product5,product6,product7,product8,product9,product10,product11,product12,product13,product14,product15];
function showProducts(){
	let product = document.getElementById('row-products');
	productList.forEach(function(item,index){
		if(index!=6 && index !=10 && index!=12){
			product.innerHTML += `
							<div class="product-row3">
								<div class="img-product">
									<img src="${item.image}">
								</div>
								<div class="title-product">
									<p>${item.title}</p>
								</div>
								<div class='stars'>
									<span><i class='${item.stars}'></i><i class='${item.stars}'></i><i class='${item.stars}'></i><i class='${item.stars}'></i><i class='${item.stars}'></i></span>
								</div>
								<div class="content-product">
									<span>${item.content}</span>
								</div>
								<div class="footer-product">
									<p>${item.footer}</p>
								</div>
							</div>
							`
		}
		else{
			product.innerHTML += `
							<div class="product-row3">
								<div class="img-product">
									<img src="${item.image}">
								</div>
								<div class="title-product">
									<p>${item.title}</p>
								</div>
								<div class='stars'>
									<span>${item.stars}</span>
								</div>
								<div class="content-product">
									<span>${item.content}</span>
								</div>
								<div class="footer-product">
									<p>${item.footer}</p>
								</div>
							</div>
							`
		}
		
	})
}

function numberlist(){
	let numberList = document.getElementById('number-list');
	for(let i=1;i<8;i++){
		if(i==1){
			numberList.innerHTML+=`
							<a href='#'><span class='btn active'>${i}</span></a>
		
							  `
			continue;				  
		}
		numberList.innerHTML+=`
							<a href='#'><span class='btn'>${i}</span></a>
							  `				  				  
	}
	numberList.innerHTML+=`
							<a href='#'><span class='btn last'></span></a>
							  `				  
}
function activeNumber(){
	let activenumber = document.getElementsByClassName('btn');
	let actived = document.getElementsByClassName('active');
	var stt=0;
	for(let i=0;i<activenumber.length;i++){
		if(i<activenumber.length-1){
			activenumber[i].addEventListener('click',function(){
				actived[0].className  =  actived[0].className.replace('active','');
				activenumber[i].className += ' active';
				stt = i;
			})
		}
		else{
			activenumber[i].addEventListener('click',function(){
				if(stt<(activenumber.length-2)){
					actived[0].className  =  actived[0].className.replace('active','');
					activenumber[stt+1].className += ' active';
					stt++;
				}
				
			})
		}
	}

}
class textProduct{
	constructor(title,text){
		this.title = title;
		this.text = text;
	}
}
let textProduct1 = new textProduct('KAFFEE & TEE ONLINE BESTELLEN','Bei J. Hornig kannst du deinen Lieblingskaffee rund um die Uhr online bestellen. Egal ob ganze Kaffeebohnen, Mahlkaffee, Cold Brew oder Kaffeekapseln. Und auch in Sachen Tee wirst du bei J. Hornig fündig: Doppelkammer- und Bio-Triangel-Tees in vielen verschiedenen Sorten findest du in unserem Online Shop. In Österreich und Deutschland versenden wir deine Kaffee-Bestellung außerdem ab einem Bestellwert von € 20 versandkostenfrei.');
let textProduct2 = new textProduct('KAFFEE FÜRS BÜRO','Wir wissen, wie wichtig guter Kaffee am Arbeitsplatz ist. Deshalb bringen wir euch mit unseren J. Hornig Büropaketen das perfekte Kaffeeerlebnis direkt ins Büro. Vom passenden Jura-Vollautomaten über Kaffeebohnen unserer exklusiven Röstmeister-Linie bis hin zu den Kaffeetassen – wir kümmern uns um alles, was das Kaffeeherz begehrt. Ihr fokussiert euch auf das wirklich Wichtige und wir erledigen den Rest – wir nennen es Coffee as a Service.');
let textProduct3 = new textProduct('MACHT MEHR AUS ZEIT','Wir bei J. Hornig glauben, dass Dinge richtig gut werden, wenn man sie sorgfältig und mit viel Liebe zum Detail macht. Wir rösten unseren Kaffee – mit einem entscheidenden Unterschied zur Konkurrenz: Wir nehmen uns Zeit. Unter Einsatz der schonenden Langzeitröstung bekommt jede unserer Bohnen genau so viel Zeit, wie sie braucht, um den perfekten Geschmack zu entfalten. Und das schmeckt man auch.');
let textProduct4 = new textProduct('J. HORNIG SPEZIALITÄTENKAFFEES','J. Hornig bietet dir eine Reihe von Single Origin Spezialitätenkaffees zur Auswahl. Ganz ohne Umwege kommt der Kaffee direkt vom Bauern zu uns nach Graz zur Röstung. Das garantiert höchste Kaffee-Qualität und bessere Bedingungen für unsere Farmer.');
let listTextProduct = [textProduct1,textProduct2,textProduct3,textProduct4];
function textFooter(){
	let text = document.getElementById('content-footer');
	listTextProduct.forEach(function(item){
		text.innerHTML += `
							<div class="text-footer">
								<h2>${item.title}</h2>
								<div class="line-footer"></div>
								<p>${item.text}</p>
							</div>
						  `
	})
}
function main(){
	showProducts();
	numberlist();
	textFooter();
	activeNumber();
}
main();
