

function Busqueda({placeHolder, onSearchChange}){

    const handleChangeBusqueda = (e) => {
        onSearchChange(e.target.value);
      };
   

    return(

        <section className="busqueda-section">
            
            <input 
            type="text" 
            onChange={handleChangeBusqueda} 
            placeholder={placeHolder} />

        </section>


    )
}
export default Busqueda