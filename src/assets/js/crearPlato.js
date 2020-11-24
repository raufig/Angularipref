/* const btnAgregar = document.getElementById('agregar');
const tabla = document.getElementById('tabla');
let ingredientes = [];

btnAgregar.addEventListener('click',agregarIngrediente);

function agregarIngrediente(){
validar();
}

function validar(){
let ingrediente = document.getElementById('ingrediente');
let gramaje = document.getElementById('gramaje');
 
if(ingrediente.value && gramaje.value){
    insertarIngrediente(ingrediente.value,gramaje.value);
    ingrediente.value='';
    gramaje.value='';
}else{
    alert('Todos los campos son obligatorios')
}

}

function insertarIngrediente(ingrediente,gramaje){
     
   let tr = document.createElement('tr');
   let objeto = {
       ingrediente:ingrediente,
       peso:gramaje,
   }
   ingredientes.push(objeto);
   tr.className='ingrediente-item'
   tr.innerHTML=`
          <td>${ingrediente[0].toUpperCase()+ingrediente.slice(1)}</td>
          <td>${gramaje}</td>
          <td><i class="fas fa-trash eliminar ${ingrediente}" ></i></td>
   `;
   tabla.appendChild(tr)

   let eliminados = document.querySelectorAll('.eliminar');
   if(eliminados){
       for(let i=0;i<eliminados.length;i++){
           eliminados[i].addEventListener('click',(e)=>eliminarIngrediente(e.target.classList))
       }
      
}

}


 
 function eliminarIngrediente(nombre){

        let listadoIngredientes = document.querySelectorAll('.ingrediente-item');
        let parametro = nombre[nombre.length-1];
       
        for(let i=0;i<listadoIngredientes.length;i++){
            let itemEliminar =(listadoIngredientes[i].firstElementChild.innerText).toLowerCase();
            if(itemEliminar===parametro){
                listadoIngredientes[i].remove();
                let nuevoArray = ingredientes.filter(ele=>ele.ingrediente!==parametro);
                ingredientes=nuevoArray;
            }
        }
 }
  */

 let foto = document.getElementById('imgp');
 function imgPreview(e) {
     let reader = new FileReader();
     reader.onload = function (e) {
         foto.src = e.target.result;
     }
     reader.readAsDataURL(e.files[0]);
     // objeto.style.backgroundImage= "url("+laurl+")
 }
 
 /* let foto = (<HTMLImageElement>document.getElementById('imgp'));
 console.log("thisIsFoto", foto)
  const reader = new FileReader();
     reader.onload = (e) => {
       foto.src = e.target.result as string;
     }
     reader.readAsDataURL(e.files[0]) */ 




