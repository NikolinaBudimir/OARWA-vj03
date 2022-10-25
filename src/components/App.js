import React, { useState } from 'react'
import Poruka from './Poruka'


const App = ({props}) => {
    
    const [poruke, PostaviPoruke]= useState(props.poruke)
    const [unosPoruke, PostaviUnos]= useState('...')
    const [ispisSve, PostaviIspis]= useState(true)

    const porukeZaIspis= ispisSve
    ? poruke
    : poruke.filter(poruka => poruka.vazno === true)

    const PromjenaUnosa = (e) => {
        console.log(e.target.value);
        PostaviUnos(e.target.value)
    }
    const novaPoruka= (e) =>{
        e.preventDefault()
        const noviObjekt = {
            id: poruke.length + 1,
            sadrzaj: unosPoruke,
            datum: new Date().toISOString(),
            vazno: Math.random() > 0.5      
          }
            //poruke.push(noviobjekt)
            //PostaviPoruke(poruke)
            PostaviPoruke(poruke.concat(noviObjekt))
            PostaviUnos('')
    }
    return (
      <div>
        <h1>Poruke</h1>

        <button>Prikazi</button>

        <form onSubmit={novaPoruka}>
            <input value={unosPoruke} onChange={PromjenaUnosa}></input>
            <button type='submit'>Spremi</button>
        </form>
        
        <ul>
          {poruke.map(p =>
            <Poruka key={p.id} poruka={p} />
          )}        
        </ul>
      </div>
    )
  }

  export default App