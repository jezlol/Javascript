const status = 700;

switch (status) {
    case 200:
        console.log('OK!');
        break;
    case 400: // or
    case 500: // or
        console.log('ERROR!');
        break;
    default: // else
        console.log('Unknown status');
}