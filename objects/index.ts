// const user = {} as { age: number | string, names?: { firstName: string, lastName: string } };

// user.age = 20;
// user.names = {} as { firstName: string, lastName: string };
// user.names.firstName = 'Szymon';
// user.names.lastName = 'Sulejczak';

const user = {
    age: 20, 
    names: {
        firstName: 'Szymon',
        lastName: 'Sulejczak',
    }
}

function showUserInfo(user: { age: number | string, names?: { firstName: string, lastName: string}}) {
    const { age, names: { firstName, lastName } = {firstName: 'Unknown', lastName: 'user'}} = user;

    return `${firstName} ${lastName} ma ${age} lat`;
}

console.log(showUserInfo(user));