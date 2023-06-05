import NavBar from "../navbar"

const Home = ({children})=>{
    return(
        <div className="d-flex flex-column">
            <NavBar/>
            {children}
        </div>
    )
}
export default Home