function validar() {
    let usuario = document.forms["miForm"]["usuario"].value;
    let clave = document.forms["miForm"]["clave"].value;
    let retorno = true;
    
    if (usuario == "") {
      document.getElementById('errorUsuario').innerHTML='El campo es obligatorio';
      retorno=false;
    }
    else if (!usuario.includes('@')){
        document.getElementById('errorUsuario').innerHTML='Debe tener una @';
        retorno=false;
    }
    else document.getElementById('errorUsuario').innerHTML='';



    if (clave == "") {
        document.getElementById('errorClave').innerHTML='El campo es obligatorio';
        retorno=false;
    }
    else document.getElementById('errorClave').innerHTML='';

    return retorno;
  }