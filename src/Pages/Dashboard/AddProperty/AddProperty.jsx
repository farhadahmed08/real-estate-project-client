import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/UseaxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { FaHome, } from "react-icons/fa";



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;



const AddProperty = () => {

    const { register, handleSubmit,reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure()
  const onSubmit = async(data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = {image:data.image[0]}
    const res = await axiosPublic.post(image_hosting_api,imageFile,{
        headers:{
            'content-type' : 'multipart/form-data'
        }
    });
    if (res.data.success) {
        //now send the menu item data to the server with the image url
        const propertyItem = {
            name : data.name,
            location:data.location,
            price:parseFloat(data.price),
            agent:data.agent,
            email:data.email,
            image:res.data.data.display_url
        }
        //
        const propertyRes = await axiosSecure.post('/properties',propertyItem)
        console.log(propertyRes.data) 
        if (propertyRes.data.insertedId) {
            // show success popup
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} is added to the menu`,
                showConfirmButton: false,
                timer: 1500
              });
        }
        
    }
    console.log('with image url',res.data);

  };




    return (
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Property Title*</span>
            </label>
            <input
              type="text"
              placeholder=" Name"
              {...register("name",{required:true})}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex gap-6">
            {/* category */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Property Location*</span>
              </label>
              <input
              type="text"
              placeholder=" location"
              {...register("location",{required:true})}
              required
              className="input input-bordered w-full"
            />
            </div>
            {/* price */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                {...register("price",{required:true})}
                className="input input-bordered w-full"
              />
            </div>
          
          </div>
          <div className="flex gap-6">
            {/* category */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Agent name*</span>
              </label>
              <input
              type="text"
              placeholder=" location"
              {...register("agent",{required:true})}
              required
              className="input input-bordered w-full"
            />
            </div>
            {/* price */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Agent email*</span>
              </label>
              <input
                type="email"
                placeholder="Agent email"
                {...register("email",{required:true})}
                className="input input-bordered w-full"
              />
            </div>
          
          </div>
           
           <div className="form-control w-full my-6">
           <input
           {...register('image',{required:true})} 
           type="file" className="file-input w-full max-w-xs" />
           </div>
          <button className="btn">
            Add Property <FaHome/> 
          </button>
        </form>
      </div>
    );
};

export default AddProperty;