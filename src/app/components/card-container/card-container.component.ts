import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {
 
  platos: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 6;

  constructor() {}

  ngOnInit(): void {
    this.cargarPlatos();
  }

  cargarPlatos(): void {
    this.platos = [
      { id: 1, nombre: 'Pizza Margarita', descripcion: 'Pizza clásica con tomate y albahaca', precio: 10, imagen: 'https://via.placeholder.com/300x180' },
      { id: 2, nombre: 'Hamburguesa Clásica', descripcion: 'Carne de res con queso y vegetales', precio: 8, imagen: 'https://via.placeholder.com/300x180' },
      { id: 3, nombre: 'Pasta Alfredo', descripcion: 'Pasta cremosa con salsa Alfredo', precio: 12, imagen: 'https://via.placeholder.com/300x180' },
      { id: 4, nombre: 'Ensalada César', descripcion: 'Ensalada fresca con pollo y crutones', precio: 7, imagen: 'https://via.placeholder.com/300x180' },
      { id: 5, nombre: 'Sushi Variado', descripcion: 'Bandeja de sushi mixto', precio: 15, imagen: 'https://via.placeholder.com/300x180' },
      { id: 6, nombre: 'Lasaña', descripcion: 'Lasaña de carne con salsa bechamel', precio: 13, imagen: 'https://via.placeholder.com/300x180' },
      { id: 7, nombre: 'Tacos al Pastor', descripcion: 'Tacos con carne al pastor y piña', precio: 9, imagen: 'https://via.placeholder.com/300x180' },
      { id: 8, nombre: 'Risotto de Champiñones', descripcion: 'Risotto cremoso con champiñones', precio: 14, imagen: 'https://via.placeholder.com/300x180' },
      { id: 9, nombre: 'Carpaccio de Res', descripcion: 'Láminas finas de carne con parmesano', precio: 11, imagen: 'https://via.placeholder.com/300x180' }
    ];
  }

  get platosPaginados(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.platos.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalPages(): number[] {
    const pages = Math.ceil(this.platos.length / this.itemsPerPage);
    return Array.from({ length: pages }, (_, i) => i + 1);
  }

  cambiarPagina(pagina: number): void {
    this.currentPage = pagina;
  }
}
