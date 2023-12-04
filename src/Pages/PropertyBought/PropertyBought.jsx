import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import UseWishList from "../../Hooks/UseWishList";


const PropertyBought = () => {

    const [wishList, refetch] = UseWishList();
    const totalPrice = wishList.reduce((total, item) => total + item.
    priceRange, 0);
    const totalPriceDecimal = totalPrice.toFixed(2);
    const axiosSecure = useAxiosSecure()


    const handleDelete = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
    
            axiosSecure.delete(`/wishList/${id}`)
            .then(res=>{
                console.log(res)
                if (res.data.deletedCount > 0) {
                      Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
                }
                refetch()
            })
    
    
            }
          });
    
      }

    return (
        <div>
      <div className="flex justify-evenly mb-8">
        <h2 className="text-4xl">Items: {wishList.length}</h2>
        {/* <h2 className="text-4xl">Total Price:{totalPrice} </h2> */}
        <h2 className="text-4xl">Total Price:{totalPriceDecimal} </h2>
        <button className="btn btn-primary">Pay</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full ">
          {/* head */}
          <thead>
            <tr>
            <th>#</th>
                <th>Image</th>
                <th>property title</th>
                <th>Property location</th>
                <th>Agent name</th>
                <th>verification status</th>
                <th>price range</th>
               
                <th>remove button</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                wishList?.map((item,ind)=> <tr key={item._id}>
                    <th>
                      # {ind+1}
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        {/* <div>
                          <div className="font-bold">{item.name}</div>
                          <div className="text-sm opacity-50">United States</div>
                        </div> */}
                      </div>
                    </td>
                    <td>
                    {item.Property_title}
                     
                    </td>
                    <td>
                    {item.property_location}
                     
                    </td>
                    <td>
                    {item.Agent_name}
                     
                    </td>
                    <td>
                    {item.verificationStatus}
                     
                    </td>
                    <td>${item.price}</td>
                    <th>
                      <button
                      onClick={()=>handleDelete(item._id)}
                       className="btn btn-ghost btn-xs">< FaTrashAlt className="text-red-600"/>
                       </button>
                    </th>
                  </tr>)
            }
            
         
          </tbody>
        
        </table>
      </div>
    </div>
    );
};

export default PropertyBought;