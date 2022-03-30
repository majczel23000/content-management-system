export interface UserModel {
    firstName: string;
    lastName: string;
    email: string;
    birthDate: string;
    address: {
        country: string;
        region: string;
        city: string;
        street: string;
        houseNo: number;
        postalCode: string
    };
    active: boolean;
    roles: [string];
    info: {
        createdAt: string;
        updatedAt: string;
        deletedAt: string;
    };
    password: string;
}
