module.exports = function solveSudoku(matrix) {
  // your solution
  // let null_cells = [];
      let n = 9;
      let blank = 0;
      //------find blank cells------------------------------
      /*for(let i = 0; i < n; i++)
        for(let j = 0; j < n; j++){
            if(matrix[i][j] === 0){
                null_cells.push({row : i, col : j, dec : []});
            }
        }*/
    //--------------------------------------------
        function checkRow(i, a){
            let checked = true;
            for(let j = 0; j < n; j++){
                if(matrix[i][j] === a){
                    checked = false;
                    break;
                }
            }
            return checked;
        }

        function checkCol(j, a){
            let checked = true;
            for(let i = 0; i < n; i++){
                if(matrix[i][j] === a){
                    checked = false;
                    break;
                }
            }
            return checked;
        }

        function checkBox(i, j, a){
            let r = i - i%3; //start row and
            let c = j - j%3; //start col of box
            let checked = true;
            for(let i = r; i < r + 3; i++)
                for(let j = c; j < c + 3; j++){
                    if(matrix[i][j] === a){
                        checked = false;
                        break;
                    }
                }
            return checked;
        }
    //-----------check suduku, recursive function---------------------------------
        function checkSudoku(){
            for(let i = 0; i < n; i++)
                for(let j = 0; j < n; j++){
                    if(matrix[i][j] === blank){
                        for(let num = 1; num <= n; num++){
                            if(checkRow(i, num) && checkCol(j, num) && checkBox(i, j, num)){
                                matrix[i][j] = num;
                                if(checkSudoku()){
                                    return true;
                                } else {
                                    matrix[i][j] = blank;
                                }
                            }        
                        }
						return false;
                    }
					
                }
            return true;
        }
		
		checkSudoku();
        return matrix;
  }
