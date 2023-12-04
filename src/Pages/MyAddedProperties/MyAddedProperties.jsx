
import useAxiosPublic from "../../Hooks/UseaxiosPublic";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

import UseMyAdded from "../../Hooks/UseMyAdded";


const MyAddedProperties = () => {


    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const [added, loading,refetch]= UseMyAdded()
    

   

    const handleDeleteItem = (item) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            const res = await axiosSecure.delete(`/myAdded/${item._id}`);
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              //refetch to update the ui
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${item.name} has been deleted`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          }
        });
      };



    return (
        <div>
             <SectionTitle
        heading="My Added Property"
        subHeading="Properties"
      ></SectionTitle>
            <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>property title</th>
                <th>Property location</th>
                <th>Agent name</th>

                <th>price range</th>
                <th>Update button</th>
                <th>Delete button</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {added?.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
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
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.location}</td>
                  <td>{item.agent}</td>

                  <td className="text-right">${item.price}</td>
               
                  <td>
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="btn btn-ghost btn-lg"
                    >
                      <FaEdit className="text-red-600"></FaEdit>
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="btn btn-ghost btn-lg"
                    >
                      <FaTrashAlt className="text-red-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> 
        </div>
    );
};

export default MyAddedProperties;