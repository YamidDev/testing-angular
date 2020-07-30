import { Component, OnInit } from '@angular/core';
import {ApirestfullService} from '../apirestfull.service';

@Component({
  selector: 'app-testservice',
  templateUrl: './testservice.component.html',
  styleUrls: ['./testservice.component.css']
})
export class TestserviceComponent implements OnInit {

  clients: any;

  constructor(private service: ApirestfullService) { }

  ngOnInit() {
    this.listClients();
  }

  public listClients() {
    this.service.get(`/clientes/all`).subscribe(
      data => {this.clients = data; },
      error => { console.log(error.message);
      }
    );
  }

}
