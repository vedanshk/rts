
import React, { useState } from 'react'



const GuestList: React.FC = () => {

    const [name, setName] = useState("");
    const [guests, setGuests] = useState<string[]>([])

    const handleClick = () => {

        setGuests([...guests, name]);
    }

    return <div>
        <h3> Guest List </h3>


        <input value={name} onChange={e => setName(e.target.value)} />
        <button onClick={handleClick}>Add Guest</button>
        <br />
        <ul>
            {guests.map(guest => <li key={guest}>{guest}</li>)}
        </ul>

    </div>;
};

export default GuestList;