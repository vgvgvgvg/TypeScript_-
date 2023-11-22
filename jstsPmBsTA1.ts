// №1
type nullable = null | undefined;
let test1: nullable;
test1 = null;
test1 = undefined;
// №2

type nullOrUndefinedBoolean = boolean | null | undefined;
let test3: nullOrUndefinedBoolean;
test3 = null;
test3 = undefined;
test3 = false;