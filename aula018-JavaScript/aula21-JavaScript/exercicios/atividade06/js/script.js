function multiplicador(x){
    return y => x * y
};
const dobro = multiplicador(2);

const triplo = multiplicador(3);

console.log(dobro(5));
console.log(triplo(5));
