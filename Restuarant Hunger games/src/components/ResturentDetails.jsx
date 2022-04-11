import { useState,useEffect } from "react"
import axios from "axios";


export const ResturentDetails = () => {
   
    const [resturent, setResturent] = useState("");
    const [rating , setRating] = useState("");
    const [pic, setPic] = useState("");
    const [payment , setPayment] = useState("");
    const [price, setPrice] = useState("");
    const [prices , setPrices] = useState("");
     const [land , setLand] =useState([]);
     const [page ,setPage] = useState(1);

     
     useEffect(() => {
       getData();
     },[page]);


     

     const getData = () => {
        axios.get(`http://localhost:3001/restuentDetails?_limit=2&_page=${page}`).then(res => {
            setLand(res.data);
     })
     }



    return (
        <div id="RDetails">
 <input type="text" placeholder="Enter Resturent Name" onChange={(e) => setResturent(e.target.value)} />

 {/* Rating */}
 <select placeholder="Rating" onChange={(e)=> setRating(e.target.value)}>
     <option>Please Select Rating</option>
     <option value="1">1</option>
     <option value="2">2</option>
     <option value="3">3</option>
     <option value="4">4</option>
     <option value="5">5</option>
 </select>
 {/* <input type="number" placeholder="Enter Ratings" onChange={(e) => setRating(e.target.value)} /> */}


 <input  type="text"  src="{text}" placeholder = "Enter Images" onChange={(e) => setPic(e.target.value)} />
{/* // payment method */}


 {/* <input type="text" placeholder="Enter Resturent Name" onChange={(e) => setResturent(e.target.value)} /> */}


 <select placeholder="Payment Method" onChange={(e)=> setPayment(e.target.value)}>
     <option>Please Select Payment Method</option>
     <option value="Cash">Cash</option>
     <option value="Card">Card</option>
     <option value="Card and Cash">Card/Cash</option>

     </select>
     {/* Price */}

     <input type="number" placeholder="Enter price for 1 person" onChange={(e)=>{
         setPrice(e.target.value)
     }} />
      <input type="number" placeholder="Enter price for 2 person" onChange={(e)=>{
         setPrices(e.target.value)
     }} />
     

 

 <button onClick={() => {
//  fetch("http://localhost:3001/restuentDetails", {
//      method: "POST",
//      body: JSON.stringify({Name: resturent , Rating:rating , Image: pic ,Mode: payment , Price: price }),
//      headers: {
//          "content-type": "application/json",
//      },
//  });
axios.post("http://localhost:3001/restuentDetails" , {Name: resturent , Rating:rating , Image: pic ,Mode: payment , Price: price , Prices: prices})
.then(()=> {
    getData();
})
 }} 
 >
     Save Data
 </button>



 

 {/* Landing Page on UI */}

 
 {land.map((g) => (
//      <div style={{
//          border: "1px solid green",
//          display:"grid",
//          gridTemplateRows: "4 ,35px",
//    gridTemplateColumns: "4, 50px",
//    marginTop: "20px"

//      }}
     <div id="image" style ={{
//    display: "grid",
//    gridTemplateRows: "4 ,35px",
//    gridTemplateColumns: "4, 50px",
   
   border: "1px solid red",
   height: "500px",
   width: "600px",
   marginTop: "30px",
  backgroundImage: 

  `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI-4gzG1slg_XVJeEmqt5dRwIfyakWLOAYxQ&usqp=CAU")`,

//   backgroundRepeat: 'no-repeat',
  backgroundSize: "cover",
  backgroundPosition: 'center center',
//   color: "white",
  fontFamily: "cursive",
  marginLeft: "400px",
  
     }}>
        
     {/* <div id="id">{g.id}</div> */}
     <div><h1>{g.Name}</h1></div>
     <img src={g.Image} />
     <div><h3>Accept {g.Mode} Only</h3></div>
     <div><h4>Ratings: {g.Rating}</h4></div>
     <div><h4>Cost For One ₹{g.Price }</h4><h4>Cost For Two ₹{g.Prices}</h4> </div>
    
     
     </div>
    
 ))}
 <button onClick={() =>{
     setPage(page-1)
    //  console.log(page)
 }}>Prev</button>


<button onClick={() =>{
    setPage(page+1)
    // console.log(page+1)
}}>Next</button>
        </div>
        
    )

}