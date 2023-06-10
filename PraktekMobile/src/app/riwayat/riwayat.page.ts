import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-riwayat',
  templateUrl: './riwayat.page.html',
  styleUrls: ['./riwayat.page.scss'],
})
export class RiwayatPage implements OnInit {

  form = {
    nama : localStorage.getItem ('nama'),
    nik : localStorage.getItem ('nik'),
    alamat : localStorage.getItem ('alamat'),
    ttl : localStorage.getItem ('ttl')
  
  }

  constructor() { }

  ngOnInit() {
  }

}
