import { Injectable } from "@angular/core";
<<<<<<< HEAD
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@angular/fire/auth";
import { signOut } from "firebase/auth";


=======
import { Auth , createUserWithEmailAndPassword, signInWithEmailAndPassword} from "@angular/fire/auth";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
>>>>>>> b3d2a317d696c59759271462013ae34be880f72e
@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private auth: Auth) { }

    register({ email, password }: any) {
        return createUserWithEmailAndPassword(this.auth, email, password);
    }

    login({ email, password }: any) {
        return signInWithEmailAndPassword(this.auth, email, password);
    }

    logout() {
        return signOut(this.auth);
    }
    loginWithGoogle(){
        return signInWithPopup(this.auth, new GoogleAuthProvider());
    }



}