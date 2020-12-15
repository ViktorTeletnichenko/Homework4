let arr = [],
            min = -20,
            max = 20;
        for (let i = 0; i < 10; i++) {
            arr[i] = [];
            for (let j = 0; j < 10; j++) {
                arr[i][j] = Math.floor(Math.random() * (max - min + 1) + min);
            }
        }
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                document.write(arr[i][j] + " ");
            }
            document.write("<br>");
        } 
        function sum2d(arr) {
         let row, col, sum = arr[0].slice();
         for( row = 1; row < arr.length; row++) {
           for( col = 0; col < sum.length; col++) {
             sum[col] += arr[row][col];
           }
         }
         return sum;
       }

       console.log (sum2d(arr))



