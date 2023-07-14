import "../Nosotros/Nosotros.scss"
import { useEffect } from 'react';

function Nosotros() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const clickear = (e) => {
        console.log("click")
    }

    useEffect(() => {
        window.addEventListener("click", clickear)

        return () => {
            window.removeEventListener("click", clickear)
        }
    }, [])


    return (
        <>


            <section className="nosotros">
                <div className="container-form">

                    <h3 className="nosotros-titulo"> QUIENES SOMOS? </h3>

                    <h4 className="nosotros-titulo">Somos el primer supermercado exclusivo on-line del pais. </h4>
                    <h4 className="nosotros-titulo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, necessitatibus nisi! Possimus, voluptate. Aperiam exercitationem, in fugit commodi dolorem nisi natus eveniet velit? Est, omnis in labore tempore excepturi blanditiis?</h4>
                    <h4 className="nosotros-titulo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, necessitatibus nisi! Possimus, voluptate. Aperiam exercitationem, in fugit commodi dolorem nisi natus eveniet velit? Est, omnis in labore tempore excepturi blanditiis?</h4>

                </div>
            </section>



        </>

    );
}

export default Nosotros;