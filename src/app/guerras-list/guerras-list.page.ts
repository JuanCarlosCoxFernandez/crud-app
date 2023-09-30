import { Component, OnInit } from '@angular/core';
import { GuerrasService } from '../servicios/guerras.service';

@Component({
  selector: 'app-guerras-list',
  templateUrl: './guerras-list.page.html',
  styleUrls: ['./guerras-list.page.scss'],
})
export class GuerrasListPage implements OnInit {
  guerras: any[] = [];

  constructor(private guerrasService: GuerrasService) {}

  ngOnInit() {
    this.loadGuerras();
  }

  loadGuerras() {
    this.guerrasService.getGuerras().subscribe(
      (data: any) => {
        this.guerras = data;
      },
      (error) => {
        console.error('Error al cargar las guerras:', error);
      }
    );
  }

  // Implementa otras funciones para crear, actualizar y eliminar guerras según tus necesidades.
}
