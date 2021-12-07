import React, { Component , useEffect,useState } from "react";
import { matriz_metodo } from "./matriz_metodos";
import { Nodo } from "./Nodo";
import { Pila } from "./Pila";
import { Iterativo } from "./Iterativo";
export default function PaginaHome() {
  let meth = new matriz_metodo(0,0,0);
  let pila = new Pila();
  let iter1 = new Iterativo(0);
   const [filas, setFilas]= React.useState(0);
   const [columnas, setColumnas]= React.useState(0);
   const [grid, setGrid]= React.useState([]);

   function x(){
     console.log("x");
     return 5;
   };
   function obtenerInput(){
     
      meth.Pedir(filas, columnas);
      let list = [];
      let v = [0,0,0,0];
      list= meth.setearGrid(list);
      var pil ;
      pil = pila.agregarPila(pil,1,1,0,false,v);
      list =iter1.Visit(1,1,list,pil, meth);
      console.log(list);
      setGrid(list);

      
   };
   const handleFilas = (e) => {
      setFilas(e.target.value);
    };
    const handleColumnas = (e) => {
        setColumnas(e.target.value);
      };
  return (
    <div style={{marginLeft:'100px',marginRight:'100px',color:'Red'}}>
      <h1>Home</h1>
      
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
