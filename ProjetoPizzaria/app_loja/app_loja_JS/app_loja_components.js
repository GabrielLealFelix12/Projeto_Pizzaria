

import { createClient } from 'supabase'
export const supabase = createClient("https://<project>.supabase.co", "<your-anon-key>")
//createClient("https://<project>.supabase.co", "<your-anon-key>")


const css_searchbar = {style:"border: none; border-radius: 2px"};




const product = {data() {
    return { count: 0, button_disabled: true, css_product:{
      style: "float:left; background-color: white; max-width:100%; max-height:35%;    overflow-wrap: break-word;"
    }, css_h1:{
      style:"text-align:right"
    }, css_img:{
      style:" width: 200px; height: 200px; object-fit: fill;"}, 
      value:this.product_name,  
    } 
  }, props: { // props permitem que conteúdo seja criado dinamicamente
    product_name: String,
    product_price: Number,
    product_img: String,
    product_desc: String,
    imgSrc: String
  },
  
  methods: {
      increment() {
        this.count++ /* métodos de classe */
        this.button_disabled = false
      }, decrement(){
        
      if (this.count <= 1){
        this.count--
        this.button_disabled = true
      }else{
        this.count--
        this.button_disabled = false
      }
        
    }, addtochartmyemit(){
      //this.lechart.push({prod:this.product_name,qtd:this.count, price:this.count*this.product_price});
      this.$emit('addtochartmyemit', this.product_name, this.product_price, this.count);
      this.count = 0;
      this.button_disabled = true;
    },
  },template: `
  
  <div v-bind="css_product">
  <img v-bind="css_img" :src='imgSrc'><br>
  
  <div  :style="{maxWidth:'160px'}">
  <h2 :id='value'>{{product_name}}</h2>
  <h2 :id='value'> R$ {{product_price}}</h2>
  </div>
  
  <div style="overflow: auto;">
  <p> {{product_desc}} </p>
  </div>
  
  <h1 v-bind="css_h1"> {{count}} 
  <button @click="increment"> + </button>
  <button @click="decrement" :disabled="button_disabled"> - </button>
  </h1>
  
  <div :style="{color:'red', display:'flex', justifyContent: 'center', alignItems:'center' }">
  <button @click="addtochartmyemit" :style="{width: '100%'}" :disabled="button_disabled"> <h2> Confirmar </h2> </button>
  </div>
  
  </div>
  
  ` /* conteúdo */
  }
  


  const menu_searchbar ={
    data(){
      return {count:0, css_divcontent: {
        style:"background-color: #B52A04; display:flex; flex-direction:column; justify-content: center; align-items:center;"
      }, css_navbar: {
        style: "  position: relative;"
      }, css_divcheckbox: {
        style:"display:flex; justify-content: center; align-items:center;  flex-direction: row;   color: white;"
      
      }, searchbar: css_searchbar,checkedRB:'', tosearch:''
    } 

    },emits: ['startsearch'],  
    methods:{
       startsearch(){
        
       this.$emit('startsearch', this.tosearch,this.checkedRB);

      }, 
      hidecontent(){
        var x = document.getElementById("teste_input");
        if (x.style.display == "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }    }
    },  
    template: 
    `<div id="menu_searchbar" :style="{display:'block'}">
    <div v-bind="css_divcontent">
    
    <nav v-bind="css_navbar">
    <input size="40" v-bind="searchbar" v-model="tosearch" placeholder="Pesquisar..." />
    <button v-bind="searchbar" @click="startsearch"><img src="app_loja_img/lupa.png" width="25" height="20">
    </button>
  
    </nav>

   
    <div v-bind="css_divcheckbox">
    <label for="bebidas"><h1>Bebidas</h1></label>  
    <input type="radio" id="bebidas" value="Bebidas" v-model="checkedRB"/>
    </div>
    
    <div v-bind="css_divcheckbox">
    <label for="pizzas"> <h1>Pizzas</h1> </label>
    <input type="radio"  id="pizzas" value="Pizzas" v-model="checkedRB" />
    </div>
    
    <div v-bind="css_divcheckbox">
    <label for="pastéis"> <h1>Pastéis</h1> </label>
    <input type="radio" id="pastéis" value="Pastéis" v-model="checkedRB" />
    </div>
    
    <div v-bind="css_divcheckbox">
    <label for="Combos"> <h1>Combos</h1> </label>
    <input type="radio" id="Combos" value="Combos" v-model="checkedRB" />
    </div>
    
    </div>
    </div>`
  
   }


   const button_hide= {
    data() {
      return { 
      thiscss_general : {style:"color: blue; display:flex; flex-direction:column; justify-content: center; align-items:center"}, 
      cssimg: {style:"width: 25px; height:20px; transform: rotate(-90deg)"}, 
      css_button:{style:"background-color: #B52A04;   border: none; border-radius: 2px;"} 
    } 
    },
    methods: {
      hidecontent(){
        var x = document.getElementById("menu_searchbar");
        if (x.style.display == "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }    }
      },
    template: `
    <div v-bind="thiscss_general">
    <button id="yikes" v-bind="css_button" @click="hidecontent"><img v-bind="cssimg" src="app_loja_img/seta.png">
    </button>
    </div>
    
    ` 
   }


const ztableprod = {data(){ 
  return {valor: 'valor', preco:0, hoverStyle:{style:"color:red"}, hoverStyleOut:{style:"color:white"}}
}, props: {
  product_name: String,
  product_price: Number,
  product_qtd: Number
},emits:['remove'],
methods:{
 ret_html(){
  return this.valor;
 }, ret_valor_final(){
  
  if (chartlist.includes(this.product_name)){
    this.preco++;
  }
 }
},
template:`
<tr>
<td> <h2> {{product_name}} </h2> </td>
<td> <h2> {{product_qtd}} </h2> </td>
<td> <h2> R$ {{product_price}} </h2> </td>
<td> <button v-bind="hoverStyle" @mouseover="this.hoverStyle={style:'color:white'}" @mouseout="this.hoverStyle={style:'color:red'}" @click="$emit('remove')">X</button> </td>
</tr>
`
}




const product_placement={
  data() {
    return { count: "bruh", imgfromdb:'',
    thiscss_general : {style:"color:red"},
    style_contentdiv:{style: "width: 50%; height: 50%; position: relative; overflow:auto; top: 25%;  left: 25%; background-color: white; border-radius: 5px;color: black; display: flex;justify-content: center;align-items: center"},
    style_chartdiv :{style: "position: fixed; display: none; width: 100%; height: 100%; top: 0;left: 0; right: 0; bottom: 0; background-color: rgba(0,0,0,0.5); z-index: 2;"}, 
    items:[],     disablebutton: false,
    itemprecototal:0} /* objetos */
  },
  
  props:{
    arraysupabase_from_parent: Array
  },
  components: {
       product, ztableprod
    },
  methods: {
addtochartprodplace(cprod, cprice, cqtd){
let chart = document.getElementById("chart_badge");
chart.innerHTML="!";
  if (this.items.some(({prod}) => prod === cprod)) {
    for (let i of this.items) {
    if (i.prod == cprod) {
              i.qtd += cqtd;
              i.price = i.qtd*cprice;
              break; 
    }}
    } else{
      this.items.push({prod:cprod ,qtd:cqtd, price:cqtd*cprice})
    console.log(cprod, cprice, cqtd)}
    
  },
  changestyledivchart(){
    
      this.style_chartdiv = {style: "position: fixed; display: none; width: 100%; height: 100%; top: 0;left: 0; right: 0; bottom: 0; background-color: rgba(0,0,0,0.5); z-index: 2;"}
    }, 
    async buildbill(){ 
    this.disablebutton = true        
    
    async function addtopedidos(valtopedidos){
      const { data, error } = await supabase.from('pedidos').insert({ total: valtopedidos}).select()
      if (data){
        return data
      }else{
        console.log (error)
      }

    }

    addtopedidos(this.itemprecototal).then(success => {
      var pedidoid = success[0].id
        sessionStorage.setItem("items", JSON.stringify(this.items));
        sessionStorage.setItem("preco_total", this.itemprecototal);
        sessionStorage.setItem("pedido_id", pedidoid);
        this.disablebutton = false
        window.location.replace("/ProjetoPizzaria/app_loja/bill.html");
    })
    .catch(error => {console.log(error)})

    }
    }, 
    watch:{
      items:{
      handler(val){
        var price = 0
        if (this.items.length < 1){
        let chart = document.getElementById("chart_badge");
        chart.innerHTML="";  
        }
        this.items.forEach(myitem =>{
          price += myitem.price;
          this.itemprecototal = price
        });
      },
      deep: true
    }, 
    }
    
    ,  

template: `    
<div>
<product v-for="(item, index) in arraysupabase_from_parent"
:key="index"
:product_name="item.nome"
:product_price="item.valor"
:imgSrc="item.url_image"
:product_desc="item.descrição"
@addtochartmyemit="addtochartprodplace"
/>  
</div>



<div v-bind="style_chartdiv" id="chartlist">


<div v-bind="style_contentdiv" id="chartlist_products">

<button :style="{     position:'absolute',
top:'0', left:'0'}" @click="changestyledivchart"> X </button>

<div v-if="items.length <= 0">
<table :style="{width:'100%',textAlign: 'center'}">

<tbody>
<tr>
<td> <h1> O seu carrinho está vazio! </h1> </td>
</tr>
</tbody>
</table>
</div>


<div v-else :style="{width:'75%',textAlign: 'center'}">
<table :style="{width:'100%',textAlign: 'center'}">
<tbody>
<tr>
<th> <h1> Produto </h1> </th>
<th> <h1> Qtd. </h1> </th>
<th> <h1> Preço </h1> </th>
</tr>

<ztableprod ref="ztableprod" v-for="(item, index) in items"
:key="index"
:product_name="item.prod"
:product_qtd="item.qtd"
:product_price="item.price"
@remove="items.splice(index, 1)"
/>



<tr>
<td> <h1> Total </h1> </td>
<td>  </td>
<td> <h1> R$ {{itemprecototal}} </h1> </td>
</tr>



</tbody>
</table>

<div>
<button style="width: 50%" @click="buildbill" :disabled="disablebutton"> 
<h2> Confirmar compra </h2> 
</button>
</div>

</div>





</div>  
</div>


  ` 
  
 };
;


const navbarboot = {data(){
  return {valor: `valor`}
}, methods:{
 testevue(){
  return this.valor;
 }, updatelist(){
  var dude = document.getElementById("chartlist");
  dude.style= "position: fixed; display: block; width: 100%; height: 100%; top: 0;left: 0; right: 0; bottom: 0; background-color: rgba(0,0,0,0.5); z-index: 2";
 },
 },emits: ['testeemit'],

template:`
<nav class="navbar bg-body-tertiary" id="barra_nav">
    <div class="container-fluid">
      <a class="navbar-brand" href="/ProjetoPizzaria/">
       <h2 class="d-inline-block align-text-top">Pizza time</h2>
       <img src="app_loja_img/pizza_vector.png" width="30" height="30">
      </a>
      
    <ul class="nav justify-content-end nav-underline" id="opcoes_carrinho_sacola">
    <li class="nav-item">
      <a class="nav-item" aria-current="page" href="#">

      <img id="carrinho" @click="$emit('testeemit')" src="app_loja_img/shopping_cart.png" width="50" height="50" class="d-inline-block align-text-top"  href="#">
      <span class="badge text-bg-dark" id="chart_badge"></span>
      </a>
    </li>
    
  </ul>
    </div>
  </nav>`
}


const fullapp = {data(){
  return {valor: `valor`, array_supabase:[], displayspin: false}
},
async beforeMount(){
     
  async function fillarray() {
    const { data, error } =  await supabase.from('produto').select().order('categoria');
    if (data)  
    return data;
    else
    return error
  }
  
   fillarray()
   .then(success => {
    this.array_supabase = success
   })
   .catch(error => {
     console.log(error)
   })  
}

, 
components:{
product_placement, navbarboot, ztableprod, product_placement, button_hide, menu_searchbar
},
methods:{
 changestyleofdiv(){
  this.$refs.propdplace_back.style_chartdiv = {style: "position: fixed; display: block; width: 100%; height: 100%; top: 0;left: 0; right: 0; bottom: 0; background-color: rgba(0,0,0,0.5); z-index: 2"};  
 }, 
 async tosearch_parent(itemname, cat){

  async function fillarray() {
    const { data, error } =  await supabase.from('produto').select().order('categoria');
    if (data)  
    return data;
    else
    return error
  }
  


  
let { data, error } = await supabase.rpc('filterd_produtos_withchars', {catq:cat, nomeq: itemname})
this.displayspin = !this.displayspin

if (data && data.length > 0) {
  //console.log(data)
  this.array_supabase = data
  this.displayspin = !this.displayspin
}else {
  alert('Nenhum produto encontrado. Tente preencher uma das opções para uma pesquisa mais precisa.')
  console.log(error)
  this.displayspin = !this.displayspin
  fillarray().then(success => {this.array_supabase = success}).catch(error => {console.log(error)})
}

  
   
}
 },
 
template:`


 <navbarboot @testeemit="changestyleofdiv"/>
 <menu_searchbar @startsearch="tosearch_parent"/>
 <button_hide/>
 <div v-if="displayspin == false">
    <product_placement ref="propdplace_back" :arraysupabase_from_parent="array_supabase"/>
 </div>

 <div v-else class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
 
  `

}


export{button_hide, menu_searchbar, product, product_placement, navbarboot, fullapp}