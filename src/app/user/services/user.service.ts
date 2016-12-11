import { Injectable } from '@angular/core';

import { User } from './../models/user';

@Injectable()
export class UserService {
    private user: User = null;

    constructor() { }

    getUser(): User {
        return this.user;
    }

    login(email: string, password: string): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            setTimeout(function() {
                if (email.startsWith('demo') && password === 'demo') {
                    let user = new User();
                    user.userid = '1';
                    user.name = 'demo';

                    resolve(user);
                } else {
                    reject('Login failed. Try again...');
                }
            }, 0);
        })
        .then((user) =>{
            // set the member var
            this.user = user;
            return user;
        })
    }

    isLoggedIn(): boolean {
        return (this.user !== null) && (typeof this.user.userid !== 'undefined')
    }

    destroy() {
        if (this.user !== null) {

        }
    }

}
