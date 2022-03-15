import mongoose from 'mongoose';

export class Database {

    constructor() {
        this.initConnection();
    }

    initConnection(): void {
        mongoose.connect('mongodb://localhost:27017/CMS', (err) => {
            if (err) {
                console.log('DB not ok: ', err);
            }
            console.log('DB ok');
        });
    }
}
