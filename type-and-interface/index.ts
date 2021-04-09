type UserTypes = 'Admin' | 'User';
type CommentsTypes = 'Public' | 'Private';

let myUserType: UserTypes = 'Admin';
let myCommentType: CommentsTypes = 'Public';

// myUserType = 'User';

type AccessMode = 1 | 2 | 3 | 4 | 5;

type BiggerType = {
    commonProperty: string;
    additionalProperty: string;
}

type SmallerType = {
    commonProperty: string;
    anotherOneProperty: number;
}

function showProperty(someObject: SmallerType) {
    return someObject.commonProperty;
}

// const bigger: SmallerType = {
//     commonProperty: 'text',
//     // additionalProperty: 'test',
// }

// showProperty({commonProperty: 'x'});

type SomeFunction = (someObject: SmallerType) => string;

let func: SomeFunction = showProperty;

function showCommonProperty(objectWithCommonProperty: BiggerType | SmallerType) {
    return objectWithCommonProperty.commonProperty;
}

const objectTest: BiggerType & SmallerType = {
    commonProperty: 'x',
    additionalProperty: 'c',
    anotherOneProperty: 1,
}

type NewType = {
    bigger: BiggerType,
    smaller: SmallerType,
}

function x(y: NewType) {
    y.bigger.additionalProperty;
}