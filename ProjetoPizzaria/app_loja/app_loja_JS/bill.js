

const ztableprod_bill = {data(){ 
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
<td> <h1> {{product_name}} </h1> </td>
<td> <h1> {{product_qtd}} </h1> </td>
<td> <h1> R$ {{product_price}} </h1> </td>
</tr>
`
}






const bill = {data(){
    return {valor: `valor`, 
    items_comprafinal: JSON.parse(sessionStorage.getItem("items")), 
    total_comprafinal:sessionStorage.getItem("preco_total"),
    pedidoid: sessionStorage.getItem("pedido_id"),
    bg_style:{style:"display: flex; flex-direction:column; align-items: center; position:relative; width: 100%; height: 50%; z-index: 2; justify-content: center;"}, 
    content_style:{style:''},
  }
  },beforeCreate(){
    if (sessionStorage.getItem("pedido_id") === null)
    window.location.replace("/ProjetoPizzaria/");
  },
  components:{
    ztableprod_bill
  },
  template:`
  <div v-bind="bg_style"> 
  <table style="  text-align: center;   border: 1px solid black;  ">
  <tr>
    <th> <h1> Produto </h1> </th>
    <th> <h1> Quantidade </h1> </th>
    <th> <h1> Preço </h1> </th>
  </tr>
  <ztableprod_bill ref="ztableprod" v-for="(item, index) in items_comprafinal"
  :key="index"
  :product_name="item.prod"
  :product_qtd="item.qtd"
  :product_price="item.price"
  />
      <tr>
       <td> <h1> Total </h1> </td>
        <td></td>
       <td> <h1> R$ {{total_comprafinal}} </h1> </td>
      </tr>
  </table>
<h1> No de identificação: {{pedidoid}} </h1>
<h1> Este é o fim da aplicação. Sinta-se livre para criar um backend para ela.</h1>

  </div>`
  }

  export{bill}