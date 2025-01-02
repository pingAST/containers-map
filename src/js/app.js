// TODO: write your code here
import ErrorRepository from './errorRepository';
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));


const errorRepo = new ErrorRepository();

console.log(errorRepo.translate(400)); //  Bad Request
console.log(errorRepo.translate(401)); //  Unauthorized
console.log(errorRepo.translate(403)); //  Forbidden
console.log(errorRepo.translate(404)); //  Not Found
console.log(errorRepo.translate(500)); //  Internal Server Error
console.log(errorRepo.translate(999)); //  Unknown error
