import axios from "axios";
import {useState,useEffect}  from "react";

const [items, setItems] = useState([]);
const [dataIsLoaded, setDataIsLoaded] = useState(false);


useEffect(() => {
    axios.get("http://localhost:8080/project/get/")
      .then((res) => {
        setItems(res.data);
        setDataIsLoaded(true);
        console.log("op", res);
      });
  }, []);

  if (!dataIsLoaded) {
    return (
      <div>
        <h1> Please wait some time.... </h1>
      </div>
    );
  }


const connection =() =>{

return(
    <div>
      {items.map((item) => (
         <div className="item">
            <ol>
               <div>
                    id:{item.id},
                </div>
                <div>
                 inverter: {item.inverter},
                </div>
            </ol>
         </div>
     
   ))}
   </div>
);
}