import MyContext from "./Mycontext"
import { useContext, useEffect } from "react"

export default function Home() {
    //Hacer uso del hook useContext para acceder al estado global desde los
    //componentes que lo necesiten
    const data = useContext(MyContext)
    console.log(data)
    function handleclick(item) {
        if (item.liked === true) {
            item.liked = false
            console.log("update exitoso")
        } else {
            item.liked = true
            console.log("update exitoso")
        }
    }
    useEffect(() => {
        <MyContext.Provider value={midata.liked}></MyContext.Provider>
    },[midata])
    var midata
    function render() {
        midata = data.map((item) => {
            return (
                <div style={{width: "15rem"}} className="col g-4" key={item.id}>
                    <div  className="card" style={{width: "15rem"}}>
                        <img style={{backgroundSize: "cover"}} src={item.src.portrait}  className="card-img-top" alt={item.alt}></img>
                        <div className="card-body">
                            <h5 className="card-title">{item.alt}</h5>
                            <div className="d-flex justify-content-center align-items-center">
                            <i className="fa-solid fa-user m-1"></i>
                                <p className="card-text m-1">{item.photographer}</p>
                            </div>
                            <div className="d-flex justify-content-center">
                                <a href={item.photographer_url} rel="noreferrer" target="_blank" className="btn btn-primary m-1">profile</a>
                                <button onClick={() => handleclick(item)} className="btn btn-danger m-1">	&#9829;</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            )
        })
        return midata
    }

    return (
        <div>
            <div className="container text-center">
                <div className="row">
                    {render()}
                </div>
            </div>
        </div>
    )
}
