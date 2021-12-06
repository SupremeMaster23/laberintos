
export class matriz_metodo {
    
    constructor(columnas , filas, k){
      this.columnas=3;
      this.filas=0;
      this.k =0;
    }

    Pedir(f , c){
      this.filas =parseInt(f);
      this.columnas=parseInt(c);
      if(this.filas%2 ==0){this.filas+=1;}
      if(this.columnas%2 ==0){this.columnas+=1;}
  
    };
    
    setearGrid(grid){
     for(var i =0 ; i<this.filas; i++){
       for(var j=0; j<this.columnas; j++){
         grid[i]= grid[i]||[];
         grid[i][j]='#';
       }
     }
     grid[0][1]=' ';
     grid[this.filas-1][this.columnas-2]=' ';
     return grid;
    }

    IsInBounds(x, y){
      if(x<1 || x >(this.filas-2)){
        return false;
      }
      if(y<1 || y> (this.columnas-2)){
        return false;
      }
      return true;
    }
    
  }