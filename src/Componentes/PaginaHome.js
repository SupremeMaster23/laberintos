import React, { Component , useEffect,useState } from "react";
import { matriz_metodo } from "./matriz_metodos";
import { Nodo } from "./Nodo";
import { Pila } from "./Pila";
import { Iterativo } from "./Iterativo";
import {primMethod} from "./primMethod";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
export default function PaginaHome() {

  let pila = new Pila();
  let iter1 = new Iterativo(0);
  let prim = new primMethod([],[],0,0);
   const [filas, setFilas]= React.useState(0);
   const [columnas, setColumnas]= React.useState(0);
   const [meth, setmeth]= React.useState(new matriz_metodo(0,0,0));
   const [grid, setGrid]= React.useState([]);

   function obtenerInput(){
      meth.Pedir(filas, columnas);
      let list = [];
      let v = [0,0,0,0];
      list= meth.setearGrid(list);
      var pil ;
      pil = pila.agregarPila(pil,1,1,0,false,v);
      list =iter1.Visit(1,1,list,pil, meth);

      prim.col =meth.columnas;
      prim.fil=meth.filas;
      prim.llenarVertices(list);
       let gg = prim.compilar(list);
      setGrid(gg);
   };
   function resolver(){
    let list = [];
    list =grid;
    meth.solveMaze(list);
    setGrid([...grid, list]);


     
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
      <Grid container spacing={0} >
      <Grid item xs={2}>
        </Grid>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={2}>
        <TextField id="standard-basic" label="Columnas" variant="standard" onChange={(e)=>handleColumnas(e)} value={columnas} type="number"/>
        </Grid>
        <Grid item xs={2}>
        <TextField id="standard-basic" label="Filas" variant="standard" onChange={(e)=>handleFilas(e)} value={filas} type="number"/>
        </Grid>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={12} style={{margin:"10px"}}>
        <Button style={{margin:"10px"}} variant="contained" onClick={obtenerInput}>GENERAR</Button>
        <Button style={{margin:"10px"}} variant="contained" onClick={resolver}>RESOLVER</Button>
        <Button style={{margin:"10px"}} variant="contained" onClick={resolver}>PRIM</Button>
        </Grid>
        </Grid>
    
      
      {
        grid.map( (lineas)=>{
          return(
          <div >
          {lineas.map(
              (columnas, index)=>{
                return(
                  columnas == '#' ?(
                      <span ><img src={require('/Users/gabrieladiazr/Documents/GitHub/laberintos/src/Componentes/pared.png').default} width="5%"></img></span>
                
                  ) :( columnas=='*' ?(
                    <span><img src={require('/Users/gabrieladiazr/Documents/GitHub/laberintos/src/solucion.png').default} width="5%" ></img></span>)
                   :(
                    <span><img src={require('/Users/gabrieladiazr/Documents/GitHub/laberintos/src/Componentes/camino.png').default} width="5%" ></img></span>)
                  )
                  
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
