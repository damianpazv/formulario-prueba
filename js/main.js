let personasdata=[{
    nombre: "John Doe",
    edad: 32,
    estadoCivil: "Soltero",
    dni: "123456789"
  },
  {
    nombre: "Jane Smith",
    edad: 28,
    estadoCivil: "Casada",
    dni: "987654321"
  }
];


function rendertable()
{
    let tabla=document.getElementById("person-table")
    let fila=[];
    personasdata.forEach(persona => {
        fila+=` <tr>
        <td>${persona.nombre}</td>
        <td>${persona.edad}</td>
        <td>${persona.estadoCivil}</td>
        <td>${persona.dni}</td>
      </tr>`;
    });
    tabla.innerHTML=fila;
}


    let form=document.getElementById("form");
    form.addEventListener("submit",(evt)=>{
      evt.preventDefault();
      let nuevaPersona={
        nombre:evt.target.elements.nombre.value,
        edad:evt.target.elements.edad.value,
        estadoCivil:evt.target.elements.estadoCivil.value,
        dni:evt.target.elements.dni.value
      }; 
      personasdata.push(nuevaPersona);
rendertable();
    })



