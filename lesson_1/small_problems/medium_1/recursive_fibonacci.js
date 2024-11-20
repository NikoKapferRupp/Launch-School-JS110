//get the count
// returns number on the count


function fibonacci(count) {
  if(count <= 2) {
    return 1;
  }
  
   return fibonacci(count - 1) + fibonacci(count - 2);
}


fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
fibonacci(20);      // 6765