import React from 'react';
import './App.css';
import sketch from './sketch';
import p5 from 'p5';
import Main from './Main';
import { useState } from 'react'


const TEXT = 'Feliz Cumpleaños Ximena';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const App = (props) => {
  const canvasRef = React.useRef(null);
  const [showModal, setShowModal] = React.useState(false);

  React.useEffect(() => {
    const getData = async () => {
      const canvasDivElement = canvasRef.current;
      new p5(sketch(canvasDivElement, TEXT), canvasDivElement);
    }
    getData()
  }, [props.id])

  return (
    <div className='bg-no-repeat bg-cover' style={{ 
      backgroundImage: `url("https://wallpapers.com/images/featured/mha-a215fibxwa98k84n.jpg")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
      <div className='bg-pink-900/75'>
        <div className="main">
          <div ref={canvasRef} />
        </div >
        <div className='grid grid-cols-2 place-content-stretch justify-items-center'>
          <div className='relative p-6'>
            <iframe className='' width="400" height="250" src="https://www.youtube.com/embed/3NH_DWB_H18?si=njei6yX-sweXkTU7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className='ml-80 '>
            <button class="absolute top-50 left-50 bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => setShowModal(true)}>Click Aqui!</button>
            <img className='w-1/4 ml-10' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/75b671eb-8d92-4106-b26c-7aa016787a80/ddv0ggv-d70d96bf-9a3d-48f2-8c14-89b899e882a2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc1YjY3MWViLThkOTItNDEwNi1iMjZjLTdhYTAxNjc4N2E4MFwvZGR2MGdndi1kNzBkOTZiZi05YTNkLTQ4ZjItOGMxNC04OWI4OTllODgyYTIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3juJ4GWxFuv_LCfaUhIzEdRdwsN-ICqSPqcH_tK0tyI'/>
            
          </div>
          

        </div>
      </div>
      {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      FELIZ CUMPLEAÑOS
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                      Primero que nada, ojalá tenga lindo dia, que sea uno donde salga de esa rutina aburrida que tanto dice que tiene, asi sea un rato nomás.
                      Ahora, me tome la molestia de hacer esto para demostrar el aprecio que le tengo, es enserio cuando digo lo mucho que me ha ayudado a llevar
                      mi dia a dia estos ultimos años, no se que hubiera hecho sin esas conversaciones que me sacan del estrés de la universidad asi sea un rato. 
                      Puedo decir que se convirtió en parte importante de mi vida, a pesar de que nos veamos una vez cada eclipse solar (xd)
                    </p>
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                      No se exactamente por que dificultades esté pasando, pero sepa que si algún dia siente que ya no puede más, puede contar conmigo, 
                      de alguna manera la apoyaré. O incluso sin ir a casos tan extremos, en general si necesita algo puede decirme, en la medida de lo posible
                      le colaboraré.
                    </p>
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">Hay mas cosas que quiero decir pero no me salen las palabras (Por eso siempre
                    duerma bien jajajja) entonces eso, <strong>FELICIDADES</strong> y <i><b>QUE VIVA 200 AÑOS MAS</b></i></p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
    </div>
  )
}

export default App;
