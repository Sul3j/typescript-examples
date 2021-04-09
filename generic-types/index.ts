const names: Array<string> = [];

names.push('Szymon');

function getAndReturnValue<T>(item: T) {
    return item;
}

const nameWiktor = 'Wiktor';

const returnedNameWiktor = getAndReturnValue(nameWiktor);

type FrontendFrameworks = 'React' | 'Vue' | 'Angular';
type BackendFrameworks = '.Net' | 'Laravel' | 'Nest.js';

type Emplyee = {
    firstName: string;
    lastName: string;
    age: number;
    pesel: number;
}

type QA = {
    typeOfTesting: 'unit' | 'manual' | 'e2e';
} & Emplyee;

type BackendDev = {
    backendFramework: BackendFrameworks;
} & Emplyee;

type FrontendDev = {
    frontendFramework: FrontendFrameworks;
} & Emplyee;

interface Collection<T> {
    devs: Array<T>;
    addDev(newDev: T): void;
    getDev(pesel: number): T | null;
    removeDev(pesel: number): void;
    update(pesel: number, newData: T): void;
}
// interface FrontendDevCollection {
//     devs: Array<FrontendDev>;
//     addDev(newDev: FrontendDev): void;
//     getDev(pesel: number): FrontendDev | null;
//     removeDev(pesel: number): void;
//     update(pesel: number, newData: FrontendDev): void;
// }


class EmplyeeDatabase<T extends FrontendDev | BackendDev | QA> implements Collection<T> {
    devs: Array<T> = [];

    addDev(newDev: T) {
        this.devs.push(newDev);
    }

    getDev(pesel: number) {
        return this.devs.find(dev => dev.pesel === pesel) ?? null;
    }

    removeDev(pesel: number) {
        this.devs = this.devs.filter(dev => dev.pesel !== pesel);
    }

    update(pesel: number, newData: T) {
        this.devs = this.devs.map(dev => {
            if (dev.pesel === pesel) {
                return {...dev, ...newData}
            }
            return dev;
        })
    }
}

// class FrontendDevsDatabase implements FrontendDevCollection {
//     devs: Array<FrontendDev> = [];

//     addDev(newDev: FrontendDev) {
//         this.devs.push(newDev);
//     }

//     getDev(pesel: number) {
//         return this.devs.find(dev => dev.pesel === pesel) ?? null;
//     }

//     removeDev(pesel: number) {
//         this.devs = this.devs.filter(dev => dev.pesel !== pesel);
//     }

//     update(pesel: number, newData: FrontendDev) {
//         this.devs = this.devs.map(dev => {
//             if (dev.pesel === pesel) {
//                 return {...dev, ...newData}
//             }
//             return dev;
//         })
//     }
// }

const frontendDevsDatabase = new EmplyeeDatabase<FrontendDev>();
frontendDevsDatabase.addDev({
    firstName: 'Szymon',
    lastName: 'Sulejczak',
    age: 20,
    pesel: 123456789,
    frontendFramework: 'Angular',
})

const backendDevsDatabase = new EmplyeeDatabase<BackendDev>();
backendDevsDatabase.addDev({
    firstName: 'Szymon',
    lastName: 'Sulejczak',
    age: 20,
    pesel: 123456789,
    backendFramework: 'Nest.js',
})

const qaDatabase = new EmplyeeDatabase<QA>();
qaDatabase.addDev({
    firstName: 'Szymon',
    lastName: 'Sulejczak',
    age: 20,
    pesel: 123456789,
    typeOfTesting: 'e2e',
})