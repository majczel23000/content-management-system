import mongoose from 'mongoose';

export class Database {

    constructor() {
        this.initConnection();
    }

    initConnection(): void {
        mongoose.connect('mongodb://localhost:27017/CMS').then(
            () => {
                console.log('Database connection success.');
            },
            err => {
                console.log('DB not ok: ', err);
            }
        )
    }
}
