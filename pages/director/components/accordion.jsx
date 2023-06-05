import { useState } from "react"
import { Accordion, AccordionHeader, AccordionBody,AccordionItem, Card, CardBody, CardFooter, Button } from "reactstrap"
function AccordionComponent({children,title}){
    const [open, setOpen] = useState('1')
    const toggle = (id)=>{
        if(open == id){
            setOpen()
        }
        else{
            setOpen(id)
        }
    }
    return(
        <div>
             <Accordion className="w-100" open={open} toggle={toggle}>
                <AccordionItem>
                    <AccordionHeader targetId="1">{title}</AccordionHeader>
                        {children}
                </AccordionItem>
            </Accordion>
        </div>
    )
}
export default AccordionComponent