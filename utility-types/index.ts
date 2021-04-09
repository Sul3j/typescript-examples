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