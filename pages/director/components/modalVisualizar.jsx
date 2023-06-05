import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap"

function ModalView({show, closed, senha, mensagem, dia}){
   
    return(
        <div>
            <Modal isOpen={show} onClosed={closed}>
                <ModalHeader toggle={closed}>
                    <h2>Reclamação</h2>
                </ModalHeader>
                <ModalBody>
                   <p>Senha : {senha}</p>
                   <p>Dia de atendendimento: {dia}</p>
                   <p>Mensagem:</p>
                   <textarea name="" id="" cols="30" rows="10" className="w-100 p-2 input" readOnly value={mensagem}></textarea>
                </ModalBody>
            </Modal>
        </div>
    )
}
export default ModalView