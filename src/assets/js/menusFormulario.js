let botonAddPlato = document.getElementById("botonAddPlato");
let formularioAddPlato = document.getElementById("formularioAddPlato");
let botonGuardar = document.getElementById('guardar');
let botonCancelar = document.getElementById("cancelar");
let adicionarIngrediente = document.getElementById("adicionarPlato");
const ingredientesAgregados = document.getElementById('ingredientesAgregados');
const grillaPlatos = document.getElementById('grillaPlatos');
let Listaingredientes = [];
let listaPlatos = [];
let contador = 0;
let ingrediente;
botonAddPlato.addEventListener("click", () => {
    if (formularioAddPlato.style.opacity == 0) {
        formularioAddPlato.style.visibility = "visible";
        formularioAddPlato.style.opacity = 1;
    } else {
        formularioAddPlato.style.opacity = 0;
    }
});
botonCancelar.addEventListener("click", () => {
    formularioAddPlato.style.opacity = 0;
});

adicionarIngrediente.addEventListener("click", () => {
    let inputIngrediente = document.getElementById("ingredientes");

    if (inputIngrediente != '') {
        ingrediente = {
            ingredient: inputIngrediente.value,
        };
        // guardarNombrePlatoEnStorage(nombrePlato);
        guardarIngredienteEnStorage(ingrediente);
        agregarIngrediente();
        inputIngrediente.value = '';

    } else {
        alert('No has escrito un ingrediente');
    }
});

botonGuardar.addEventListener('click', () => {
    let inputNombrePlato = document.getElementById('NombrePlato');
    let inputIngrediente = document.getElementById("ingredientes")
    ingredientes = JSON.parse(localStorage.getItem('ingredientes'));
    let tiempoCoccion = document.getElementById('tiempoCoccion');
    let plato = {
        nombre: inputNombrePlato.value,
        ingredients: ingredientes,
        tiempoCoccion: tiempoCoccion.value
    }
    console.log(plato);
    guardarPlatoEnStorage(plato);
    inputNombrePlato.value = '';
    inputIngrediente.value = '';
    tiempoCoccion.value = '';

    localStorage.setItem("ingredientes", null);
    Listaingredientes = [];
    console.log(typeof JSON.parse(localStorage.getItem('ingredientes')), JSON.parse(localStorage.getItem('ingredientes')));
    agregarIngrediente();
    agregarCard();
})

const guardarIngredienteEnStorage = (ingrediente) => {
    console.log(typeof localStorage.getItem("ingredientes"), localStorage.getItem("ingredientes"));
    if (JSON.parse(localStorage.getItem("ingredientes")) == null) {
        Listaingredientes.push(ingrediente);
        const ingredientesString = JSON.stringify(Listaingredientes);
        console.log(ingredientesString);
        localStorage.setItem("ingredientes", ingredientesString);
    } else {
        let listaEnStorage = JSON.parse(localStorage.getItem("ingredientes"));
        listaEnStorage.push(ingrediente);
        const ingredientesString = JSON.stringify(listaEnStorage);
        localStorage.setItem("ingredientes", ingredientesString);
    }

};

const agregarIngrediente = () => {
    const ingredientesStorage = JSON.parse(localStorage.getItem('ingredientes'));

    let html = '';

    if (ingredientesStorage != null) {
        ingredientesStorage.forEach((ingrediente) => {
                console.log(ingrediente);
                html += `<div class="inputs">
                    <label for="ingredientes">Ingrediente</label>
                    <h6>${ingrediente.ingredient}</h6>
                    <i class="fas fa-minus-circle"></i>
                </div>`;
                ingredientesAgregados.innerHTML = html;

            }

        )
    } else {
        ingredientesAgregados.innerHTML = '';
    }
}

const guardarPlatoEnStorage = (plato) => {

    if (localStorage.getItem("platos") == null) {
        listaPlatos.push(plato);
        console.log(listaPlatos);
        const platoString = JSON.stringify(listaPlatos);
        console.log(platoString);
        localStorage.setItem("platos", platoString);
    } else {
        let listaPlatosEnStorage = JSON.parse(localStorage.getItem("platos"));
        listaPlatosEnStorage.push(plato);
        console.log(listaPlatosEnStorage);
        const platoString = JSON.stringify(listaPlatosEnStorage);
        localStorage.setItem("platos", platoString);
    }


};



const agregarCard = () => {

    const platosStorage = JSON.parse(localStorage.getItem('platos'));
    console.log(platosStorage);
    let html = '';
    platosStorage.forEach((plato) => {
            console.log(plato);
            html += `<div class="cardPlato">
                        <img src="../img/tomates.png" width="100px" alt="tomates">
                        <div class="cardTexto">
                            <h5> ${plato.nombre} </h5>
                            <h6>${plato.tiempoCoccion}</h6>
                            <h5>ingredientes</h5>
                            `
            plato.ingredients.forEach((ingredientes) => {

                html +=
                    `
                        ${ingredientes.ingredient}. 
                    `
            })

            html += `
                            <div>
                                <button id="botonEditar" type="button">Editar</button>
                                <button id="botonEliminar" type="button">Eliminar</button>
                                <button id="botonDuplicar" type="button">Duplicar</button>
                            </div>
                            
                        </div>
                    </div>`
            grillaPlatos.innerHTML = html

        }

    )
}