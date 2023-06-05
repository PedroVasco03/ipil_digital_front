import NavbarLogin from "./navbarLogin"
import stylelogin from '../../pages/css/navbarlogin.module.css'
import { Button, Input, Label } from "reactstrap"
import Link from "next/link"

function Pesquisar(){
    return(
        <div>
            <NavbarLogin></NavbarLogin>
            
                <form className={stylelogin.form}>
                    <h2 className={`text-center m-2 ${stylelogin.h2}`}>Filtrar - Admin</h2>
                    <Input className="m-3" placeholder="Admininistrador"></Input>
                    <Button color="primary" className="m-3">Filtrar Dados</Button>
                   <br/>
                </form>
        </div>
    )
}
export default Pesquisar