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