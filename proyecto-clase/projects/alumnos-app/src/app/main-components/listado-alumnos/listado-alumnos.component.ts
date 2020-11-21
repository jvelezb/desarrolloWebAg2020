import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../models/alumnos';
import { animation, trigger, animateChild, group, transition, animate, style, query, state } from '@angular/animations';
import { AlumnosService } from '../../main-services/alumnos.service';
import {  takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';




@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.scss'],
  animations: [
    trigger('childAnimation', [
      // ...
      state('open', style({
        width: '250px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        width: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('3s')
      ]),
    ]),
  ],
})
export class ListadoAlumnosComponent implements OnInit {

  alumnoSeleccionado: any;

  alumnos: Alumno[] = [];

  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private alumnosServices: AlumnosService) {}


  estilo = false;

  ngOnInit(): void {

      this.alumnosServices.getAlumnos().pipe(takeUntil(this.destroy$)).subscribe((data: any[])=>{
      this.alumnos = data;
    })  ;
  }


  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }



  seleccionAlumnos(alumno: Alumno): void{
    this.alumnoSeleccionado = alumno;
  }



  toggle() {
    this.alumnosServices.insertarAlumnos({ nombres: "Juan", matricula: "1235", carrera: "ITC" ,edad:3});
    this.estilo = !this.estilo;
  }

}
