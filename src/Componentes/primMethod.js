export class primMethod {
    constructor(v, a, col, fil){
       this.v = [];
       this.a=[];
       this.col=0;
       this.fil=0;
    }


    llenarVertices(grid){
       
        for(let x =0 ; x< this.fil ; x++){
            for(let y =0 ; y<this.col ; y++){
                if(grid[x][y]==" "){
                    let s1 = x.toString()+" "+y.toString();
                    this.v.push(s1);

                    let Norte =0;
                    let Sur = 0;
                    let Este =0;
                    let Oeste = 0;

                    Norte= x-1;
                    Sur= x+1
                    Este=y+1;
                    Oeste=y-1;

                    if(Norte >=0){
                        let s2 = Norte.toString()+" "+y.toString();
                        let ponderacion = (x*x)+(Norte*Norte);
                        
                        if(grid[Norte][y]=="#"){
                            ponderacion=9999;
                        }
                        let p = ponderacion.toString();
                        let aristaN = [s1, s2 , p];
                        this.a.push(aristaN);

                    }
                    if(Sur<this.fil){
                        let s2 = Sur.toString()+" "+y.toString();
                        let ponderacion = (x*x)+(Sur*Sur);
                         if(grid[Sur][y]=="#"){
                            ponderacion=9999;
                        }
                        let p = ponderacion.toString();
                        let aristaN = [s1, s2 , p];
                        this.a.push(aristaN);
                    }
                    if(Este< this.col){
                        let s2 = x.toString()+" "+Este.toString();
                        let ponderacion = (Este*Este)+(y*y);
                        if(grid[x][Este]=="#"){
                            ponderacion=9999;
                        }
                        let p = ponderacion.toString();
                        let aristaN = [s1, s2 , p];
                        this.a.push(aristaN);
                    }
                    if(Oeste>=0){
                        let s2 = x.toString()+" "+Oeste.toString();
                        let ponderacion = (Oeste*Oeste)+(y*y);
                        if(grid[x][Oeste]=="#"){
                            ponderacion=9999;
                        }
                        let p = ponderacion.toString();
                        let aristaN = [s1, s2 , p];
                        this.a.push(aristaN);
                    }

                }
            }
        }
        console.log(this.a);
    }

   

    findMinEdge(edges){
        let min = null;
        for (const edge of edges) {
            min = min ? parseInt(edge[2]) < parseInt(min[2]) ? edge : min : edge;
        }
        return min;
    
    }
    findEdgesIn(srcs, objs, edges, vertices) {
        let edgesBetweenSrcObj = [];
        for (const edge of edges) {
            for (const src of srcs) {
                let srcIndex = vertices.indexOf(src);
                for (const obj of objs) {
                   let objIndex = vertices.indexOf(obj);
                                     if (edge[0] === srcIndex && edge [1] === objIndex || edge [0] === objIndex && edge [1] === srcIndex) {
                        edgesBetweenSrcObj.push(edge);
                    }
                }
            }
        }
        return edgesBetweenSrcObj;
    }


    prim(edges, vertices, startVertex) {
      
        let infected = []; 
        let remained = vertices.slice(0); 
        let mstree = []; 
   let cur = startVertex;
   while (remained.length !== 1) {
       infected.push(cur);
       remained.splice(remained.indexOf(cur), 1);
       let min = this.findMinEdge(this.findEdgesIn(infected, remained, edges, vertices));
       mstree.push(min);
             let x1 = this.fil-1;
             let y1 = this.col -2;
             let s1 = x1.toString()+" "+y1.toString();
             if(parseInt(min[2])==s1){
                 break;
             }
                cur =infected.indexOf (vertices[min [0]]) === -1? vertices[min [0]]: vertices [min [1]]; 
   }
   return mstree;
}


DisjoinSet() {
    this.items = {};
    this.makeSet = function (vertices) {
        for (const vertex of vertices) {
            this.items[vertex] = {
                parent: null,
                value: vertex
            };
        }
    }
    this.unionSet = function (vertex_1, vertex_2) {
        const rootA = this.find(vertex_1);
        const rootB = this.find(vertex_2);
        if (rootA === null || rootB === null) {
            throw new Error('no exist vertex');
        }

        if (rootA !== rootB) {
            rootA.parent = rootB
            return true;
        }
        return false;
    }
    this.find = function (vertex) {
        let p = this.items[vertex];
        if (p) {
            return p.parent === null ? p : this.find(p.parent.value);
        }
        throw new Error('not exist vertex');
    }
}


}