interface Names {
    firstName: string;
    lastName: string;
}
interface User {
    age: number;
    names: Names;
}

// interface Player {
//     nick: string;
//     names: Names;
// }

type PlayerNames = {
    firstName: string, 
    lastName: string,
}

type Player = {
    nick: string;
    names: PlayerNames;
}

// const user = {} as { age: number | string, names?: { firstName: string, lastName: string } };

// user.age = 20;
// user.names = {} as { firstName: string, lastName: string };
// user.names.firstName = 'Szymon';
// user.names.lastName = 'Sulejczak';

const user: User = {
    age: 20, 
    names: {
        firstName: 'Szymon',
        lastName: 'Sulejczak',
    },
};

const player: Player = {
    nick: 'sulej',
    names: { 
        firstName: 'Szymon',
        lastName: 'Sulejczak',
    },
};

function showFirstnameAndLastname(person: {names: { firstName: string; lastName: string }}) {
    const { firstName, lastName } = person.names;

    return `${firstName} ${lastName}`;
};

function showUserInfo(user: User) {
    const { age, names: { firstName, lastName } = {firstName: 'Unknown', lastName: 'user'}} = user;

    return `${firstName} ${lastName} ma ${age} lat`;
}

console.log(showUserInfo(user));
console.log(showFirstnameAndLastname(user));
console.log(showFirstnameAndLastname(player));