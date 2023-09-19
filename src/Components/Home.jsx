// import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// const Home = () => {
//     return (
//         <div>
//             <div>
//                 <h2>Choose a plan that's just right for you !</h2>
//                 </div>
//                 <div style={{display:"flex",alignItems:"center", gap:"20px", marginLeft:"20px"}}>
//                 <Card style={{ width: '18rem' }}>
//                     {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
//                     <Card.Body>
//                         <Card.Title>Card Title</Card.Title>
//                         <Card.Text>
//                             Some quick example text to build on the card title and make up the
//                             bulk of the card's content.
//                         </Card.Text>
//                         <Button variant="primary">Go somewhere</Button>
//                     </Card.Body>
//                 </Card>


//                 <Card style={{ width: '18rem' }}>
//                     {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
//                     <Card.Body>
//                         <Card.Title>Card Title</Card.Title>
//                         <Card.Text>
//                             Some quick example text to build on the card title and make up the
//                             bulk of the card's content.
//                         </Card.Text>
//                         <Button variant="primary">Go somewhere</Button>
//                     </Card.Body>
//                 </Card>


//                 <Card style={{ width: '18rem' }}>
//                     {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
//                     <Card.Body>
//                         <Card.Title>Card Title</Card.Title>
//                         <Card.Text>
//                             Some quick example text to build on the card title and make up the
//                             bulk of the card's content.
//                         </Card.Text>
//                         <Button variant="primary">Go somewhere</Button>
//                     </Card.Body>
//                 </Card>
//             </div>
//         </div>
//     )
// }

// export default Home
// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// const Home = () => {
//   return (
//     <div>
//       <div>
//         <h2>Choose a plan that's just right for you!</h2>
//       </div>
//       <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginLeft: "20px" }}>
//         <Card style={{ width: '18rem' }}>
//           {/* Card content */}
//         </Card>

//         <Card style={{ width: '18rem' }}>
//           {/* Card content */}
//         </Card>

//         <Card style={{ width: '18rem' }}>
//           {/* Card content */}
//         </Card>
//       </div>
//     </div>
//   )
// }

// export default Home;

import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = () => {
    return (
        <div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Card style={{ width: '18rem', margin: '0 20px', boxShadow: "1px 1px 5px black"}}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>Basic</Card.Title>
                        <p style={{ textDecoration: "line-through" }}>$ 89.99/mo</p>
                        <h1>9.99<span>/mo</span></h1>
                        <Button variant='success'>Get Started <span>--></span></Button>
                        <hr />
                        <ul>What you'll get :
                            <li>Upto 25 Users</li>
                            <li>Upto 25gb Storage</li>
                            <li>Email Support</li>
                        </ul>

                        <p style={{ textDecoration: "underline", textAlign: "center" }}>EXPLORE FEATURES</p>

                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', margin: '0 20px',boxShadow: "1px 1px 5px black" }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>Standard</Card.Title>
                        <p style={{ textDecoration: "line-through" }}>$ 89.99/mo</p>
                        <h1>99.99<span>/mo</span></h1>

                        <Button variant="primary">Get Started <span> --> </span></Button>
                        <hr />
                        <ul>What you'll get :
                            <li>Upto 25 Users</li>
                            <li>Upto 25gb Storage</li>
                            <li>Email Support</li>
                        </ul>

                        <p style={{ textDecoration: "underline", textAlign: "center" }}>EXPLORE FEATURES</p>

                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', margin: '0 20px' , boxShadow: "1px 1px 5px black"}}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>Premium</Card.Title>
                        <p style={{ textDecoration: "line-through" }}>$ 89.99/mo</p>
                        <h1>199.99<span>/mo</span></h1>

                        <Button variant="primary">Get Started <span> --> </span></Button>
                        <hr />
                        <ul>What you'll get :
                            <li>Upto 25 Users</li>
                            <li>Upto 25gb Storage</li>
                            <li>Email Support</li>
                        </ul>

                        <p style={{ textDecoration: "underline", textAlign: "center" }}>EXPLORE FEATURES</p>

                    </Card.Body>
                </Card>
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}>
                <div className="card mb-3" style={{ maxWidth: "540px", margin: '20px 20px', boxShadow: "1px 1px 5px black" }}>
                    <div className="row g-0">
                        <div className="col-md-3">
                            <Button>Free Forever </Button>
                            <h3>Free Starter</h3>
                            <h6>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h6>
                            {/* <img src="..." className="img-fluid rounded-start" alt="..." /> */}
                            <Button>Get Started --> </Button>
                        </div>

                        <div className="col-md-8">
                            <div className="card-body">
                            <ul>What you'll get :
                            <li>Upto 25 Users</li>
                            <li>Upto 25gb Storage</li>
                            <li>Email Support</li>
                        </ul>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                {/* <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3" style={{ maxWidth: "540px", margin: '20px 20px', boxShadow: "1px 1px 5px black" }}>
                    <div className="row g-0">
                        <div className="col-md-3">
                            <Button>Free Forever </Button>
                            <h3>Free Starter</h3>
                            <h6>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h6>
                            {/* <img src="..." className="img-fluid rounded-start" alt="..." /> */}
                            <Button>Get Started --> </Button>
                        </div>

                        <div className="col-md-8">
                            <div className="card-body">
                            <ul>What you'll get :
                            <li>Upto 25 Users</li>
                            <li>Upto 25gb Storage</li>
                            <li>Email Support</li>
                        </ul>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                {/* <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
