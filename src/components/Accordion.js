import React, { useState} from 'react'

function Accordion({title, info, id}) {
const [show, setShow] = useState(false);

const toggle = () => {
    setShow((prev) => !prev)
}

  return (
    <div key={id}>
   <div className="accordion-app">
   <h2>{title}</h2>

<button onClick={toggle} className='accordion-icon'>
    {show ? '-' : '+'}
</button>
   </div>

   {show && <p>{info}</p>}
      
    </div>
  )
}

export default Accordion
