export default getErrorCodeMessage;

const getErrorCodeMessage = errorCode => errorCodeResolver[errorCode]

const errorCodeResolver = {
    'auth/email-already-in-use': 'A user with the same email already exists.',
    'different-passwords': 'The passwords do not match.',
    'auth/user-not-found': 'Invalid email or password',
    'auth/wrong-password': 'Invalid email or password',
    'auth/too-many-requests': 'Too many unsucessful sign ins, please try again later ',
}