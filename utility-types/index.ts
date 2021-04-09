type Person = {
    id: number;
    firstName: string
    lastName: string
}

const szymon = {
    id: 0,
    firstName: 'Szymon',
    lastName: 'Sulejczak',
}

const szymonUpdated = {
    id: 1,
}

function updatePerson(id: number, szymon: Partial<Person>) {}
function anotherUpdate(oldData: Person, newData: Partial<Person>) {
    return {...oldData, ...newData};
}

// Partial<Person>
// => type {
// id?: number;
// firstName?: string;
// lastName?: string;
// }

const newNameOfPerson = {
    firstName: 'Cyprian',
};

updatePerson(0, newNameOfPerson);
anotherUpdate(szymon, szymonUpdated);

type Emplyee = {
    id: number;
    firstName: string;
    lastName: string;
    jobPosition?: string;
}

function newWorker(newWorker: Required<Emplyee>) {}

// In Required type all items are required

const newFrontend: Required<Emplyee> = {
    id: 89,
    firstName: 'Aleksander',
    lastName: 'Sulejczak',
    jobPosition: 'frontend',
}

newWorker(newFrontend);

const test = {
    x: 1
} as const;

const alek: Readonly<Emplyee> = {
    id: 23,
    firstName: 'Aleksander',
    lastName: 'Sulejczak',
    jobPosition: 'backend',
};

type NamesKey = 'szymon' | 'joanna' | 'cyprian';

type MyFamilyType = Record<NamesKey, Partial<Person>>;

const myFamily: MyFamilyType = {
    szymon: { id: 20, firstName: 'Szymon', lastName: 'Sulejczak' },
    joanna: {},
    cyprian: {},
}

// Pick

type PersonSecond = {
    age: number;
    firstName: string;
    id: number;
    lastName: string;
};

 function updateUserFistName(id: number, personToUpdate: Pick<PersonSecond, 'firstName' | 'lastName'>) {}

