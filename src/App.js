import React, { useState } from 'react'
import OrderMenu from './OrderMenu'
import OrderView from './OrderView'

export default function App() {
  const [order, setOrder] = useState("tacos")

  return (
    <div>
      <OrderView order={order} amount={5} toGo/>
      <OrderMenu setOrder={setOrder}/>
    </div>
  )
}


// import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
// import { Link } from 'react-router-dom';

// const CampsiteCard = ({ campsite, setCampsites, campsites }) => {
//     const { id, image, name } = campsite;

//     const deleteCampsite = () => {
//         setCampsites(campsites.filter(c => c.id !== id)) // set it to an array with this campsite missing
//     }

//     return (
//         <Link to={`${id}`}>
//             <Card>
//                 <CardImg width='100%' src={image} alt={name} />
//                 <CardImgOverlay>
//                     <CardTitle>{name}</CardTitle>
//                 </CardImgOverlay>
//                 <button onClick={deleteCampsite}>Delete</button>
//             </Card>
//         </Link>
//     );
// };

// export default CampsiteCard;


// import { Col, Row } from 'reactstrap';
// import CampsiteCard from './CampsiteCard';
// import { selectAllCampsites } from './campsitesSlice';

// const CampsitesList = () => {
//     const [campsites, setCampsites] = useState(CAMPSITES)

//     return (
//         <Row className='ms-auto'>
//             {campsites.map((campsite) => {
//                 return (
//                     <Col md='5' className='m-4' key={campsite.id}>
//                         <CampsiteCard campsite={campsite} setCampsites={setCampsites} campsites={campsites} />
//                     </Col>
//                 );
//             })}
//         </Row>
//     );
// };

// export default CampsitesList;
      