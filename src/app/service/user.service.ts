import { Injectable } from "@angular/core";
import { Auth , createUserWithEmailAndPassword, signInWithEmailAndPassword} from "@angular/fire/auth";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private auth: Auth) {}

    register({ email, password}: any){
        return createUserWithEmailAndPassword(this.auth, email, password);
    }

    login({email, password}: any){
        return signInWithEmailAndPassword(this.auth, email, password);
    }

    logout(){
        return signOut(this.auth);
    }
<<<<<<< HEAD
    loginWithGoogle(){
        return signInWithPopup(this.auth, new GoogleAuthProvider());
    }
=======
>>>>>>> 25af1aa80c2732c594d33b0d1c5ac8bbb5a35350

}