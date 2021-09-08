import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireFunctions } from '@angular/fire/functions';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(
    private angularFireAuth: AngularFireAuth,
    private angularFireFunctions: AngularFireFunctions
  ) { }

  register(email: string, password: string) {
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password);
  }

  addAdminRole(userId: string) {
    return this.angularFireFunctions.httpsCallable('addAdminRole')({ uid: userId });
  }

  addHasPaidRole(userId: string) {
    return this.angularFireFunctions.httpsCallable('addHasPaidRole')({ uid: userId });
  }

  removeAdminRole(userId: string) {
    return this.angularFireFunctions.httpsCallable('removeAdminRole')({ uid: userId });
  }

  createUser(email: string, password: string, nombre: string, apellido: string) {
    return this.angularFireFunctions.httpsCallable('createUser')({ email, password, displayName: nombre + ' ' + apellido });
  }

  updateUser(uid: string, email: string, displayName: string, disabled: boolean) {
    return this.angularFireFunctions.httpsCallable('updateUser')({ uid, email, disabled, displayName });
  }

  login(email: string, password: string) {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password);
  }

  // async showCustomClaim() {
  //   return (await this.angularFireAuth.currentUser).getIdTokenResult();
  // }

  async sendEmailVerification() {
    await (await this.angularFireAuth.currentUser).sendEmailVerification();
  }

  sendPasswordResetEmail(email: string) {
    return this.angularFireAuth.sendPasswordResetEmail(email);
  }

  sendEmailVerificationLink(email: string, uid: string, user: string) {
    return this.angularFireFunctions.httpsCallable('sendEmailVerificationLink')({ email, uid, user });
  }

  sendInviteEmail(email: string, usuario: string) {
    return this.angularFireFunctions.httpsCallable('sendInviteEmail')({ email, usuario });
  }

  logout() {
    return this.angularFireAuth.signOut();
  }

  // updateModels() {
  //   return this.angularFireFunctions.httpsCallable('updateOrganizationModel')({});
  // }
}
