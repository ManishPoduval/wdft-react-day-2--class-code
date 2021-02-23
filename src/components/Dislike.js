import React, {useState} from 'react'

function Dislike() {
    //const [STATE, FUNCTION] = useState(DEFAULT)
    // Call FUNCTION with the UPDATED VALUE OF STATE
    // Something like FUNCTION(STATE+1)
    const [dislikeNumber, updateNumber] = useState(0)
    const [name, updateName] = useState('Manish')
    const [text, updateText] = useState('Dislike')

    /*
    // Another way to do it
    const handleClick = () => {
        updateNumber(dislikeNumber+1)  
        updateName('Alvaro')
    }
    return (<button onClick={handleClick} >{dislikeNumber} {name} Dislike</button>)
    */

    return (
        <button onClick={() => { 
             updateNumber(dislikeNumber+1)  
             updateName('Alvaro')
        }  } >{dislikeNumber} {name} Dislike</button>
    )
}

export default Dislike
