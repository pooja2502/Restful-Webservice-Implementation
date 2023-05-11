import axios from "axios";
import React from "react";

// -- Code to get all customer details
// -- URL to fetch the API data
const baseURL = "http://localhost:8080/customers"

// const particularCustomerURL = "http://localhost:8080/customers/{custId}"

// const viewOrdersURL = "http://localhost:8080/customers/{custId}/orders"

// const particularCustomerParticularOrder = "http://localhost:8080/customers/{custId}/orders/{orderId}"


function App() {

  const [post, setPost] = React.useState([]);


    function getCustomerDetails(id){
      alert(id);
    }

    function getOrders(id){

    }

  //React.useEffect(() => {

      axios.get(baseURL)
      .then((response) => {
        setPost(response.data.Customers);
        console.log(JSON.stringify(response.data.Customers));
      })
      .catch(error => console.log(`Error: ${error}`));
  
  //});

  return (
    <div className="App">
      <header className="App-header">
      </header>
     
      <div className='container'>
        <h2>Customer Details</h2>
      </div>
      <div className="container">
      <table className="table table-striped">
      <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Region</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Email</th>
              <th>View Details</th>
               <th>View Orders</th>
            </tr>
          </thead>

      {post.map((item) => (
        <>
          <tbody>
            <tr>
              <th scope="row">{item.userId}</th>
              <td>{item.firstName + item.lastName}</td>
              <td>{item.region}</td>
              <td>{item.phoneNumber}</td>
              <td>{item.emailAddress}</td>
              <td><button className="btn btn-primary" onClick={() => getCustomerDetails(item.userId)}> Get Customer Details </button></td>
              <td><button className="btn btn-success" onClick={() => getOrders(item.orderId)}> Get Orders </button> </td>
            </tr>
          </tbody>
        </>
      ))}
      </table> 
      </div>
        
    </div>
  );
}

export default App;
