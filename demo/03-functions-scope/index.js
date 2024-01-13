function sayHello(name='khai', age=20) {
    // console.log('hello cac ban'+name);// noi chuoi
    // `hello cac ban ${name}. toi dang bao nhiu tuoi${age}`;
    return'adfdfd'
  }
  const result=  sayHello('nam');
console.log(result);
  // noi chuoi = emplattring ``
  
//  arrow ()=> extendtion
//   function add2(){

//   }
  const addNumber =(a,b)=>{
    // xu li them
    return a+b;
  };
  //tuong duong voi const addNumber =(a,b)=>a+b
  console.log(addNumber(9,10));
const createOb=()=>{
    myName:'khai'
}
console.log(createOb);