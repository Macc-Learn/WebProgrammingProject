class Catalog
{
	constructor()
	{
		this.products=
		[
			{id:1,name:"LOGITECH GLOW KEYBOARD",  code:"bklgtkey", image:"item-keyboard.png",	description:"Backlit keyboard keys light up as your hands approach and adapt to the environment.", price:120.99},
			{id:2,name:"SONY 4K MONITOR", code:"sony4kmon", image:"item-monitor.png", description:"Elevate your performance with the INZONE M9 4K HDR Gaming Monitor. Delivering razor-sharp 4K picture quality for all types of games, with a 144Hz refresh rate that will allow you to sharpen your response times.", price:699.69},
			{id:3,name:"SONY HEADPHONES", code:"sonyheadphones", image:"item-headphones.png", description:"Long-lasting noise cancellation performance. Featuring Dual Noise Sensor technology and an Integrated Processor V1, fully immerse yourself in music without any distractions", price:1555.69}
		];
	}
	getItem(code)
	{
		 for (let i=0; i<this.products.length; i+=1)
		 {
			 if(this.products[i].code==code) return this.products[i];
		 } 
		 return null;
	}
	getElement(code)
	{
		const example = `
		    <script>
			var c = new Catalog();
			document.writeln((c.getItem('lguhdtv')).name+":<img src='images/"+(c.getItem('lguhdtv')).image+"' width='200px'></img>"); 
			</script>
			
			<input type="button" value="addToCart" 
			onclick="let x1=new ShoppingCart(getCookie('whoami'));x1.addItem('lguhdtv');alert('LG TV Added to cart ...');"  
		/>`;
		const item = this.getItem(code);

		return `
		<div class="prodElement">
        <img
          src="./images/${item.image}"
          alt="${item.name}"
          class="prodImage"
        />
        <span class="prodDetails">
          <h2 class="prodName">${item.name.toLocaleUpperCase}</h2>
          <p class="prodDescription">${item.description}</p>
          <p class="prodPrice">$${item.price}</p>
        </span>
        <input
          type="button"
          value="Add To Cart"
          onclick="let x1=new ShoppingCart(getCookie('whoami'));x1.addItem('lguhdtv');alert('LG TV Added to cart ...');"
        />
      </div>`;
	}
	itemExist(code)
	{
		for (let i=0; i<this.products.length; i+=1)
		{
			 if(this.products[i].code==code) return true;
		} 
		 return false;
	}
}
