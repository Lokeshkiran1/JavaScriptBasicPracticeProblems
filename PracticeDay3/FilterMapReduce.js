const companies=[
    {name:"abc",category:"sales",start:1985,end:2005},
    {name:"123",category:"retail",start:1956,end:2015},
    {name:"efg",category:"finance",start:2000,end:2012},
    {name:"pqr",category:"auto",start:1978,end:2007},
    {name:"xyz",category:"tech",start:1999,end:2009},
]


const ages=[24,18,15,63,45,29,30,54,72,14,9,12,11,68];


//forEach
companies.forEach(function(company){
    console.log(company.name);
});

//filter------------------------------>>>

// let canDrive=[];
// for(let i=0;i<ages.length;i++){
//     if(ages[i]>=18){
//         canDrive.push(ages[i]);
//     }
// }
// console.log(canDrive);

// const canDrive=ages.filter(function(age){
//     if(age>=18){
//         return true;
//     }
// });
// console.log(canDrive);

const canDrive=ages.filter(age=>age>=18);
console.log(canDrive);

const retailCompanies=companies.filter(company=>company.category==='retail');
console.log(retailCompanies);

//map------------------------------->>

const agesTimesTwo=ages.map(age=>age*2);
console.log(agesTimesTwo);


//sort companies by start year-------------------------------->>

const sortedCompanies=companies.sort((a,b)=>(a.start>b.start?1:-1));
console.log(sortedCompanies);


//reduce  finding total age ----------------------->>
const ageSum=ages.reduce((total,age)=>total+age,0);
console.log(ageSum);

//get total years of working of all companies

const totalYears=companies.reduce((total,company)=>total+(company.end-company.start),0);
console.log(totalYears);


