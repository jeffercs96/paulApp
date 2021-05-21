import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  nombre="Jeff"
  apellido="Sandoval"
   edad=25
  empresa="google"
  /*getEdad(){
    return this.edad;
  }*/

  habilitacionCuadro=false;

  usuRegistrado=false;

  textoRegistro="no hay nadie registrado";

  getRegistroUsuario(){
    this.usuRegistrado=false
  
  }

  setUsuarioRegistrado(event: Event){
    
    //alert ("el usuario se acaba de registrar")
  
    //this.textoRegistro="El usuario se acaba de registrar"
    if((<HTMLInputElement>event.target).value=="si"){
      this.textoRegistro="El usuario se acaba de registrar"
    }else{
      this.textoRegistro="no hay nadie registrado";

    }

  }


  constructor() { }

  ngOnInit() {
  }

}
