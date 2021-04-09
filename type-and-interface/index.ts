type UserTypes = 'Admin' | 'User';
type CommentsTypes = 'Public' | 'Private';

let myUserType: UserTypes = 'Admin';
let myCommentType: CommentsTypes = 'Public';

// myUserType = 'User';

type PointXPsition = 1 | 2 | 3 | 4 | 5;

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

const exampleObject = {
    a: '1',
    b: 0,
} as const;

const bigger: SmallerType = {
    commonProperty: 'text',
    anotherOneProperty: 3,
}

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
    point?: Point,
}

function x(y: NewType) {
    y.bigger.additionalProperty;
}

interface Point {
    readonly x: PointXPsition;
    readonly y: number;
}

interface Description {
    description: string;
}

interface PointWithDescription extends Point, Description {
    z?: number;
}

const point: PointWithDescription = {
    x: 2,
    y: 0,
    description: 't',
}

point.description = 'text';