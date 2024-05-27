const _ = require('lodash');
//....isNull

const value = null;
console.log(_.isNull(value));

const values = [null, 'bus', 'car', undefined];
const nullValues = _.filter(values,_.isNull)
console.log(nullValues);

const value1 = 'sai';
const result = _.isNull(value1)? 'value is null' : 'value is not null';
console.log(result);

const users = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: null },
    { name: 'Bob', age: 35 }
  ];
  const nullAges = _.filter(users, user => _.isNull(user.age));
  console.log(nullAges);   

  //...isNil

  const value2 =  undefined;
  console.log("isNill", _.isNil(value2));

  //....difference


const array1 = [1, 2, 3, 4, 5];
const array2 = [2, 3, 6];

const diff = _.difference(array1, array2);
console.log("difference", diff); 

//....uniq

const array = [1, 2, 2, 3, 3, 4];
const uniqueArray = _.uniq(array);
console.log("uniq", uniqueArray);


//...flatten

const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = _.flatten(nestedArray);
console.log("FlattenArray", flattenedArray);


const credResults = [
    [{ partner: 'A', amount: 1000 }, null, { partner: 'B', amount: 2000 }],
    [undefined, { partner: 'C', amount: 1500 }],
    [{ partner: 'D', amount: 3000 }, { partner: 'E', amount: 2500 }]
  ];

  const payment = _.flatten(credResults).filter(record=> !_.isNil(record));
  console.log(payment);

  //....find

const user1 = [
  { name: 'John', age: 30 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 }
];
const foundUser = _.find(user1, { age: 25 });
console.log(foundUser); 

//......map
const names = ['john', 'alice', 'bob'];
const upperCaseNames = _.map(names, name => name.toUpperCase());

console.log(upperCaseNames); 


const numbers = [1, 2, 3];
const squaredNumbers = _.map(numbers, num => num * num);

console.log(squaredNumbers); 






const data = {
  product1: { productoffercode__c: 'offer1', name: 'Product A', price: 100 },
  product2: { productoffercode__c: 'offer2', name: 'Product B', price: 200 },
  product3: { productoffercode__c: 'offer1', name: 'Product C', price: 150 },
  product4: { productoffercode__c: 'offer3', name: 'Product D', price: 180 }
};

// Mapping over the values of the data object and extracting the productoffercode__c property
const productOfferCodes = _.uniq(_.map(_.values(data), data => data.productoffercode__c));

const productOffvalue = productOfferCodes.length;

console.log(productOffvalue);
