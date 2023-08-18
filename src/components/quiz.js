import React from 'react'

const quiz = () => {
function onNext(){
    console.log('On Next CLick')
}
function onPrev(){
    console.log('On Prev CLick')
}

  return (
    <div className="container">
        <h1 className="title text-light">Quiz Application</h1>
         {/* diaply question */}

         <div className="grid">
            <button className="btn prev" onClick={onPrev}>Prev</button>
            <button className="btn next" onClick={onNext}>Next</button>
         </div>

    </div>
  )
}

export default quiz