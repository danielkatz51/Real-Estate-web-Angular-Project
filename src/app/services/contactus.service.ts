import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {
  constructor(
    private storage: AngularFireStorage,
    private afs: AngularFirestore,
    private toastr: ToastrService,
    private router: Router
  ) { }

  uploadMessage(messageData) {
    this.afs.collection('CustomerMessages').add(messageData).then((docRef) => {
      this.toastr.success('Your Message sent successfully');
      this.router.navigate(['/login']);
    });
  }

}

