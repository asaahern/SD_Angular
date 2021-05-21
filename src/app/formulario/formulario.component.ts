import { Component, OnInit } from '@angular/core';
import { Usuario } from './../usuario'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})

export class FormularioComponent implements OnInit {

  posicion : number = null
  accion   : string = 'insertar'

  listaUsuarios : Array<Usuario>= []

  usuario : Usuario = {
    nombre         : '',
    apellido       : '',
    edad           : 0,
    DNI            : '',
    cumpleanos     : new Date(),
    colorFavorito  : '',
    sexo           : ''
  }
  
  constructor() {}
  
  ngOnInit(): void {}

  registrarUsuario() : void {

    if( this.accion === 'insertar'){

      let fecha   = new Date(this.usuario.cumpleanos) 
      let dia     = fecha.getUTCDay()
      let mes     = fecha.getUTCMonth()
      let anio    = fecha.getUTCFullYear()
      let testedad= this.usuario.edad
      this.usuario.cumpleanos = `${dia}/${mes}/${anio}`

      if(testedad > 0 && testedad <= 125){
        this.listaUsuarios.push( this.usuario )

        this.usuario = {
          nombre         : '',
          apellido       : '',
          edad           : 0,
          DNI            : '',
          cumpleanos     : new Date(),
          colorFavorito  : '',
          sexo           : ''
       }

      }

    }else{
      this.listaUsuarios[this.posicion] = this.usuario
      this.accion = 'insertar'
    }
   

   }

  actualizar( posicionActualizar : number ) : void {
    this.usuario  = this.listaUsuarios[posicionActualizar]
    this.accion   = 'actualizar'
    this.posicion = posicionActualizar

  }
  eliminar( posicionEliminar : number ) :void {
    this.listaUsuarios.splice( posicionEliminar , 1 )
  }

}
