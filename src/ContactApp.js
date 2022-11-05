function AddressCard() {
    return (
        <div className="bg-light m-3 p-3">
            <h3>{ props.contact.name }</h3>
            <p>
                { props.contact.address.street }<br/>
                { props.contact.address.city },
                { props.contact.address.state }
                { props.contact.address.zipCode }
            </p>
        </div>
    )
}

export default function ContactApp() {
    const mariaContact = {
        name: "Maria Delgado",
        address: {
            street: "123 Main St",
            city: "San Francisco",
            state: "CA",
            zipCode: "12345"
        }
    }
    return (
        <AddressCard contact={mariaContact}/>
    )
}