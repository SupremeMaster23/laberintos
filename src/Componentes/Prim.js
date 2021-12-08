import React, { Component } from "react";
import { matriz_metodo } from "./matriz_metodos";
import { recursivo } from "./recursivo";
export default function Prim() {
  let meth = new matriz_metodo(0,0,0);
  let recursion = new recursivo(0);
   const [filas, setFilas]= React.useState(0);
   const [columnas, setColumnas]= React.useState(0);
   const [grid, setGrid]= React.useState([]);


   function obtenerInput(){
     
      meth.Pedir(filas, columnas);
      let list = [];
      list= meth.setearGrid(list);
      var pil ;
      recursion.Visit(1,1,list,meth);
      setGrid(recursion.gridf);
      

      
   };
   const handleFilas = (e) => {
      setFilas(e.target.value);
    };
    const handleColumnas = (e) => {
        setColumnas(e.target.value);
      };
  return (
    <div style={{marginLeft:'100px',marginRight:'100px',color:'Red'}}>
      <h1>Recursivo</h1>
      
      <input onChange={(e)=>handleColumnas(e)} value={columnas} type="number"></input>
      <input onChange={(e)=>handleFilas(e)} value={filas} type="number"></input>
      <button onClick={obtenerInput}></button>
      {
        grid.map( (lineas)=>{
          return(
          <div >
          {lineas.map(
              (columnas, index)=>{
                return(
                  columnas == '#' ?(
                      <span ><img src={require('/Users/gabrieladiazr/Documents/GitHub/laberintos/src/Componentes/pared.png').default} width="5%"></img></span>
                
                  ) :( <span><img src={require('/Users/gabrieladiazr/Documents/GitHub/laberintos/src/Componentes/camino.png').default} width="5%" ></img></span>)
                  )
              }  
            )
            }
            <br></br>
            </div>
           
          )
          }
        
        )
      }
      </div>
  );
   }

