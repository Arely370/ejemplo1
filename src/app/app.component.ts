import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // RouterOutlet is used in the template
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fundamentos';

  // Propiedades.
  nombre = 'ARELI';
  aniosServicio = 22;
  email = 'arelitt21@utsjr.edu.mx';
  activo = true; 
  alumnos = [24, 25, 26];
  contador = 0;
  numero = 5;
  desactivarBoton = true;
  productos = [
    {
      id: 1,
      descripcion: 'Gansito Marinela',
      precio: 15.50
    },
    {
      id: 2,
      descripcion: 'Sabritas',
      precio: 20.75
    },
    {
      id: 3,
      descripcion: 'Pepsi',
      precio: 18.00
    }
  ];

  // Función que muestra un mensaje dependiendo del valor de la propiedad 'activo'.
  estaActivo() {
    if (this.activo) {
      return 'Empleado activo';
    } else {
      return 'Empleado inactivo';
    }
  }

  // Método que suma los valores del arreglo de alumnos.
  sumarAlumnos() {
    let suma = 0;
    for (let i = 0; i < this.alumnos.length; i++) {
      suma += this.alumnos[i];
    }
    return suma;
  }

  // Función para incrementar el contador.
  incrementarContador() {
    this.contador++;
  }

  // Función para decrementar el contador.
  decrementarContador() {
    this.contador--;
  }

  // Función que cambia el valor de desactivarBoton.
  cambiarValor() {
    this.desactivarBoton = false;
  }
}