import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  registro(): void{
    this.auth.loginWithRedirect({screen_hint: 'signup' })
  }

}
