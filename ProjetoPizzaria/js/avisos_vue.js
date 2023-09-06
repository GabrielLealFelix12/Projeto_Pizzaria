import {supabase} from '/ProjetoPizzaria/app_loja/app_loja_js/app_loja_components.js'


const esqueleto = {data(){
    return {valor: `valor`}
  }, methods:{
   testevue(){
    return this.valor;
   }
  },
  template:`
  <div> basic content </div>`
  }




  const avizos = {data(){
    return {valor: `valor`,  
    dataaviso: [], 
    dataaviso_num_max: 0, 
    dataaviso_num: 0,
     displayonarrayload:false, 
     index:0,
    disable_bt_right: false, disable_bt_left: false,
    style_contentdiv:{style: "min-width: 50%; max-width: 90%; min-height: 50%; max-height: 90%;position: relative; overflow: auto; background-color: white; border-radius: 5px;color: black; display: flex;justify-content: center;align-items: center"},
    style_contentdivbackground: {style: "position: fixed; display: none; flex-wrap: wrap; align-content: center; justify-content: center; width: 100%; height: 100%; top: 0;left: 0; right: 0; bottom: 0; background-color: rgba(0,0,0,0.5); z-index: 2;"} ,
    style_leftarrow:{style:"border: solid black;border-width: 0 3px 3px 0;display: inline-block;padding: 3px; transform: rotate(135deg); -webkit-transform: rotate(135deg);"},
    style_rightarrow:{style:"border: solid black; border-width: 0 3px 3px 0; display: inline-block;padding: 3px; transform: rotate(45); -webkit-transform: rotate(-45deg);"}
}
  }, methods:{
    testevue(){
     return this.valor;
    }, 
    changestylehide(){
    this.style_contentdivbackground = {style: "position: fixed; display: none; width: 100%; height: 100%; top: 0;left: 0; right: 0; bottom: 0; background-color: rgba(0,0,0,0.5); z-index: 2;"}; 
    },
     changeaviso_direita(){
      this.index++
      this.dataaviso_num++
   }, changeaviso_esquerda(){
     this.index--
     this.dataaviso_num--
  }
   
    },
  
    async beforeMount(){
    const { data, error } = await supabase.from('avisos').select()
    
    if (data && data.length){
     console.log(data)
     this.dataaviso = data
     this.dataaviso_num_max = this.dataaviso_num_max + data.length
     this.dataaviso_num = this.dataaviso_num  + 1
    } else{
     console.log(error)
    }
  },
  watch:{
    dataaviso:{
         handler(val){
      this.style_contentdivbackground = {style: "position: fixed; display: flex; flex-wrap: wrap; align-content: center; justify-content: center; width: 100%; height: 100%; top: 0;left: 0; right: 0; bottom: 0; background-color: rgba(0,0,0,0.5); z-index: 2;"} 
      this.displayonarrayload = true;
      
    }, 
    
    deep:true
    
    }, 

    dataaviso_num(otherval){
      if(this.dataaviso_num == 1 && this.dataaviso_num_max == 1){
        this.disable_bt_right = true;
        this.disable_bt_left = true;
      }else if(this.dataaviso_num >= this.dataaviso_num_max){
        this.disable_bt_left = false;
        this.disable_bt_right = true;
     }else if(this.dataaviso_num <= 1){
        this.disable_bt_left = true;
        this.disable_bt_right = false;
      }else{
        this.disable_bt_left = true;
        this.disable_bt_right = true;
      }
    }
  }
  ,  
  template:`
<div v-bind="style_contentdivbackground">
  <div v-bind="style_contentdiv">
  <button :style="{ position:'absolute', top:'0', left:'0'}" @click="changestylehide"> X </button>

   <div style="display: table; height:90%; width:90%">
	
     <div style="display: table-row; text-align: center; vertical-align: middle; width:80%">

         <div style="display: table-cell; vertical-align: middle">
            <button style="border: 2px solid white; background-color: white" @click="changeaviso_esquerda" :disabled="disable_bt_left"> <i v-bind="style_leftarrow"></i> </button>
         </div>
  
    <div style="display: table-cell;  vertical-align: middle;">
           
    <h2> {{dataaviso_num}} / {{dataaviso_num_max}} </h2>
    
    <img v-if='displayonarrayload' :src='dataaviso[index].url_image' style="max-height:50%; max-width:50%">
    
    <h3 v-if='displayonarrayload'> {{ dataaviso[index].aviso }} </h3>
     <h3 v-else> nothing to see here </h3>
     <p v-if='displayonarrayload'> Termino previsto para:  {{ dataaviso[index].vigencia }} </p>
    
     </div>
  
    <div style="display: table-cell; vertical-align: middle">
       <button style="border: 2px solid white; background-color: white" @click="changeaviso_direita" :disabled="disable_bt_right"> <i v-bind="style_rightarrow"></i> </button>
    </div>

   </div>
  </div>
 </div>
</div> 
  `
  }






  export{esqueleto, avizos}