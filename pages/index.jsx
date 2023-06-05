import Head from "next/head";
import CarouselComponent from "./Homepage/carousel";
import Footer from "./Homepage/footer";
import Home from "./Homepage/home";
import Services from "./Homepage/services";
import WhatIs from "./Homepage/whatIs";
function Index ({data}){
    return (
      <div>
        <Head>
            <title>IPILDIGITAL</title>
            <link rel="icon" type="png/ico" href="../public/images/chat.png"/>
        </Head>
       <Home>
          <CarouselComponent/>
          <WhatIs/>
          <Services/>
          <Footer/>
          
       </Home>
      </div>
    );
}
export default Index


/*export async function getServerSideProps(){
  const response = await fetch(`http://localhost:5000/`)
  const data = await response.json()
  console.log(data)
  return {props: { data }}
}*/