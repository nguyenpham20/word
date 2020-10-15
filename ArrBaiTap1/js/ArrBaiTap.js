//Prime number
function primeNumber(number){
    var sqrtNumber = Math.sqrt(number);
    var check = true ;
    if( typeof(number) != 'number'){
        //console.log('Not a number');
        check = false;
    }else {
        if ( number <= 1 ){
            //console.log('Not is prime number');
            check = false
        }else if ( number === 2 ) {
            //console.log('Is prime number');
            check = true
        } else {
            for( var i = 2; i <= sqrtNumber; ++i){
                if( number % i === 0){
                    check = false;
                    break;
                }
            };
            // if ( check === true){
            //     console.log(' Is prime number');
            // }else {
            //     console.log('Not is prime number');
            // }
        }
        
    }
    return check;
}
console.log(primeNumber(5))
/// Viết chương trình in ra các số từ 1 đến n?

function printNumber(number){
    for( var i = 2; i <= number; i+=2){// so le i +=2; so chan i = 2; i <= n; i+=2
        console.log(i);
    }
}


/////  Viết chương trình in ra các số là nguyên tố trong khoảng 1 đến n?

function printPrimeNumber(number){
    for ( var i = 1; i <= number; ++i){
        var check = primeNumber(i);
        if(check == true){
            console.log(i);
        }
    }
}
//////
//Viết chương trình tính tổng từ 1 đến n

function sum(number){
   
}

///10. In bảng cửu chương ra màn hình?
function multiTable(){
    for ( var i = 2; i <= 10; ++i){
        for ( var j =  1; j <= 10; ++j){
            console.log(i + 'x' + j + '=' + i*j);
        }
    }
}
//multiTable();

///
// Viết chương trình tính tổng từ 1 đến n?
function sum(number){
    if ( number ==1 ){
      return 1;
    }
    return number + sum(number - 1);
    //return number*number + sum(number - 1) // sum of squares number*number;
  }
  
  
   // Kiểm tra số n có toàn số lẻ tạo thành hay không?
   function checkNumber(number){
     var check = true;
     while( number > 0){
       temp = number % 10;
       if ( temp % 2 === 0){
         check = false;
         break;
       };
       number = Math.trunc(number/10);
      // console.log(number);
     }
     if( check === true){
       console.log('YES');
     }else {
       console.log('NO');
     }
   }
  //checkNumber(1135333399333333)
  
  
   //Kiểm tra n có phải là số đối xứng?
  function palindrome(number){
    var sum = 0;
    var temp = number;
    while( number >0 ){
      sum = sum*10 + number%10 ;
      number = Math.trunc(number/10);
    }
    if ( sum === temp ){
      console.log('YES');
    } else {
      console.log('NO');
    }
  }
  // palindrome(1321);
  ///
  ////11. Đếm có bao nhiêu khoảng trắng trong một chuỗi?
 function countSpace(str) {
   var count = 0
   for ( var i = 0; i < str.length; i++) {
     if( str[i] === " ") {
       count += 1;
     }
   }
   console.log(count) ; 
 }
  //countSpace(" Hello     world");

  //12. Hãy remove tất cả khoảng trắng, space và ‘enter’ trong một chuỗi
  function removeSpaceEnter(str) {
    var newStr = "";
    for ( var i = 0; i < str.length; ++i) {
      if ( str[i] === " " || str[i] === "\n" ){
        newStr = newStr;
      } else {
        newStr += str[i];
      }
    };
    console.log(newStr);
  }
  //removeSpaceEnter(" Hello \nworld")

  //14. Nhập vào chuỗi s1 và s2, cho biết vị trí xuất hiện của chuỗi s2 trong s1.

  function findIndex(str1 ,str2) {
    console.log( str1.indexOf(str2));
  }
  //findIndex( "This is a beautiful day"," ");

  //15. Viết chương trình chuẩn hóa họ tên.
function name(str){
  var strLower = str.toLowerCase();
  var temp = strLower[0].toUpperCase();
  for ( var i = 0; i < strLower.length; ++i){
    if ( strLower[i-1] === " "){
      temp += strLower[i].toUpperCase();
    } else {
      temp += strLower[i];
    }
  };
  console.log(temp);
}
function name2 (str){
 return (str.toLowerCase().split(" ").map(item => item[0].toUpperCase() + item.slice(1))).join(" ")
}


//name2("nguyeN THI tho tHu hA");

//16. Viết chương trình lấy  id name của fb.
function stringIdName(str) {
  //console.log(str.indexOf("com"));
  var output = "";
  for( var i = str.indexOf("com") + 3; i < str.length; ++i){
    output += str[i];
  }
  console.log(output);
}

//stringIdName("https://www.facebook.com/QuynhKool267")

//17.  Viết hàm số tính min, max của 3 số?
function maxNumberof (a, b, c) {
  if ( a >= b && a >= c){
    console.log( "max = ", a);
  } else if ( b >= a && b >= c ) {
    console.log( "max =", b);
  }else {
    console.log( "max =", c);
  }
}
//maxNumberof(10,5,8);
 function minNumberof (...args){ // rest parameter
   args.sort( (a, b) => a - b);
   console.log("Min = ", args[0]);
   console.log("Max = ", args[args.length -1]);
 }
// minNumberof( 10,290,20,5,0)

//18. Viết hàm tìm vị trí xâu X tồn tại kề cuối trong xâu Y?
function findIndexReverse (s1, s2){
  console.log(s1.lastIndexOf(s2));
}
//findIndexReverse ('This is','is');
//ARRAY
//21. Cho một mảng là một tập các số, tính tổng tất cả các số của mảng này?

function  sumOfArray ( arr) {
  return arr.reduce((a,b) => a + b,0);
}
//sumOfArray([1,2,4,5,6]);

// 23.Cho một mảng là một tập các số nguyên, tìm số có tần suất xuất hiện nhiều nhất?
function countAppear(arr) {
  
  var temp = 1;
  // for ( number of arr){
  //   ////var result = arr.filter( item => item === number);
  //   // console.log(result);

  // }
  for( var i = 0; i < arr.length ; ++i){ 
    var count = 1;
    for ( var j = i + 1 ; j < arr.length; ++j) {
      if ( arr[i] == arr[j]){
        count += 1;
      }
    };
    if( temp <= count){
      temp = count;
      var value = arr[i];
    }
  };
  console.log(`the most frequent value in the array: ${value}, ${temp} times `);
};
//countAppear([1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1])

//24. Cho một mảng là một tập các số nguyên dương, lọc ra một bảng b gồm tất cả các số là số nguyên tố? VD: a = [1,2,3,2,3,4,6,7] .Output: b=[2,3,2,3,7]

function filterNumberPrime (arr){
return arr.filter(primeNumber)
}
//filterNumberPrime([1,2,3,2,3,4,6,7])

/////
//25. Cho một mảng là một tập các số nguyên dương, hãy tạo một mảng b là tập hợp bình phương của các số trong mảng a
//VD: a = [1,2,3,2,3,4,6,7] .Output: b=[1,4,9,4,9,16,36,49]
function arrSquare(arr) {
  return arr.map(item => item*item );
}

///26. Cho một mảng là một tập các số nguyên dương không trùng giá trị, và một số k. Hãy tìm trong mảng phần có khoảng cách tử gần với k nhất. Vì có thể có nhiều đáp án in ra tất cả vào một mảng.
// VD: a = [1,2,3,4,6,7]; k = 8 .Output: [7]. giải thích: 7 gần giá trị với 8 nhất
// VD: a = [1,2,3,4,6,7]; k = 5 .Output: [4,6]

function approximately (arr, number) {
  var subarr = arr.map(item => Math.abs(number - item));
  var minSubarr = subarr.reduce((a,b) => {
    if (a >= b) {
      return b;
    } else return a;
  });
  var result = [];
  for ( var i = 0; i < arr.length; ++i){
    if ( subarr[i] == minSubarr){
      result.push(arr[i]);
    }
  }
  console.log(result);
}
//approximately ([1,2,3,4,6,7,9],9)

//27. Cho một mảng là một tập hợp các học viên trong lớp REACTJS,
// mảng là một tập hợp object của học viên gồm 3 thông tin: id, firstName, lastName, và age.
// Hãy đưa tên và họ về chuẩn tên với ký tự đầu tiên của tên Viết Hoa và tìm tất cả học viên 
//có tên tồn tại chữ cái “a” hoặc “A” và tên dài hơn hoặc bằng 3 ký tự.
var students = [
  {
      id: "T3HXX1",
      firstName: "NgaN",
      lastName: "Duong Thuy"
  },
  {
      id: "T3HXX2",
      firstName: "Hnh",
      lastName: "DO Thi Thu"
  },
  {
      id: "T3HXX5",
      firstName: "minh",
      lastName: "Nguyen NhAt"
  },
  {
    id: "T3HXX2",
    firstName: "Ha",
    lastName: "Do Thu"
  }

]
function filterStudent(arr) {
 var subarr = arr.map( item => {
   return {
    id : item.id,
    firstName : (item.firstName.toLowerCase().split(" ").map( str => str[0].toUpperCase() + str.slice(1))).join(" "),
    lastName : (item.lastName.toLowerCase().split(" ").map( str => str[0].toUpperCase() + str.slice(1))).join(" ")
  }}) 
  
  //console.log(subarr)// chuan hoa ten
  var result = subarr.filter(item =>  item.firstName.length >= 3).filter( item =>{
   return item.firstName.indexOf('a') != -1 || item.firstName.indexOf('A') != -1
  });
  console.log(result);// loc ket qua
}
//filterStudent(students);
////

//28. Cho một mảng là một tập hợp các học viên trong lớp REACTJS, 
//mảng là một tập hợp object của học viên gồm 3 thông tin: id, firstName, lastName, và age.
// Hãy tìm tất cả học sinh cá biệt của lớp biết rằng học sinh cá biệt có họ là “Do”.
function filterStudents28(arr) {
  var result = arr.filter( item => {
    return item.lastName.toLowerCase().indexOf('do') != -1
  } )
  console.log(result);
}
//filterStudents28(students);

//29. Cho một mảng là một tập hợp các học viên trong lớp REACTJS,
//mảng là một tập hợp object của học viên gồm 3 thông tin: id, firstName, lastName, và age. 
//Hãy sắp xếp danh sách học viên theo tên (firstName).

function sortStudents29 (arr) {
  var result = arr.sort( (a, b) => {
    var nameA = a.firstName.toLowerCase();
    var nameB = b.firstName.toLowerCase();
    if ( nameA > nameB){
      return 1
    } else if( nameA < nameB){
      return -1
    }
    return 0
  })
  console.log(result);
}
//sortStudents29( students )

//30. Cho một mảng là một tập các số nguyên dương, tìm số lớn thứ nhì trong mảng, không có thì in ra -1?
function numberSecondOfValue (arr) {
  // var maxArr = arr.reduce((a,b) => {
  //   if( a > b){
  //     return a
  //   } else return b
  // })//
  function maxValueOfArr (arr){
    return arr.reduce((a,b) => {
      if( a > b){
        return a
      } else return b
    })
  }

  var maxArr = maxValueOfArr(arr)
  var newArr = [];
  for (var i = 0; i < arr.length; ++i){
    if (arr[i] != maxArr){
      newArr.push(arr[i]);
    }
  };
  if ( newArr.length === 0){
    console.log(-1)
  }else {
    var result = maxValueOfArr(newArr);
    console.log(result);
  }
  
}
//numberSecondOfValue([1,1,1,1,1,1,1,1,1]);

//31. Cho một mảng là một tập các số nguyên dương và một số nguyên dương k,
// tìm xem trong mảng có tồn tại 3 số có tổng bằng k? (1s) , length of array.
//VD: a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1]; k = 26 .Output: YES.giải thích ( 9 + 9 + 8)
//VD: a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1]; k = 30 .Output: NO

function checkSum (arr, k) {
  // for ( let i = 0; i < arr.length; ++i){
  //   let k1 = k - arr[i];
  //   for ( let j = i + 1; j < arr.length; ++j ){
  //     let k2 = k1 - arr[j];
  //     for ( let m = j + 1; m < arr.length; ++m){
  //       if ( k2 == arr[m]){
  //         console.log("YES", arr[i], arr[j], arr[m]);
  //         break;
  //       }
  //     }
  //   }
  // }
    function subCheckSum (arr,k){
      arr.sort((a,b) => a-b);
      let low = 0;
      let high = arr.length -1;
      while ( low < high){
        if (arr[low] + arr[high] == k){
          return [arr[low], arr[high]];
        }else if (arr[low] + arr[high] < k){
          low++;
        } else high--
      }
      return "NO"
    }
    var result = []
    for ( let i = 0; i < arr.length; ++i){
      let k1 = k - arr[i];
      let subArr = arr.slice(i+1);
      var subresult = subCheckSum(subArr, k1);
      //console.log(subresult)
      if( subresult != "NO"){
        var item = []
        item.push(arr[i]);
        item = item.concat(subresult);
        result.push(item);
      }
    };
    //console.log(result);
    if ( result.length === 0){
      console.log("NO");
    } else console.log("YES", result);
}
checkSum([1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1],20)

//32. Cho một mảng là một tập các số nguyên dương theo thứ tự tăng dần, và một số k. 
//Hãy chèn k vào mảng và đảm bảo mảng ko mất tính tăng dần
function insertSort(arr, k){
 arr.push(k)
 arr.sort((a, b) => a - b);
 console.log(arr)
}
//insertSort([1,3,6,9,11,20],13)

///33. [Extra]Cho một mảng là một tập các số nguyên dương và một số nguyên dương k, 
//sắp xếp mảng mà không dùng hàm sort() cho sẵn?
// a = [9,8,7,6,4,5,3,2,1];  .Output: [1,2,3,4,5,6,7,8,9]
function myQuickSort(arr) {
  if(arr.length < 2) return arr;
  const left = [];
  const right = [];
  let pivotValue = arr[arr.length -1];
  for ( var i = 0; i < arr.length -1; ++i){
    if( arr[i] < pivotValue ) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...myQuickSort(left),pivotValue,...myQuickSort(right)];
}
//console.log(myQuickSort([9,8,7,6,4,5,3,2,1]));