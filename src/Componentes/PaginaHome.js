import React, { Component , useEffect,useState } from "react";
import { matriz_metodo } from "./matriz_metodos";
export default function PaginaHome() {

  
   function x(){
     console.log("x");
     return 5;
   };
   function y(){
     debugger;
     let meth = new matriz_metodo(0,0,0);
     let g = meth.filas;
     console.log(meth.columnas);
     
   }
  return (
    <div style={{marginLeft:'100px',marginRight:'100px',color:'Red'}}>
      <h1>Home</h1>
      <button onClick={y}></button>
      <input></input>
      <input></input>
      </div>
  );
}