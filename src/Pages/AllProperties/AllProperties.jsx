
import Properties from "./Properties";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import './AllProperties.css';
import useProperty from "../../Hooks/useProperty";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";



const AllProperties = () => {

   

    
    const [asc, setAsc] = useState(true);
    const [search, setSearch] = useState("");
    const [itemsPerPage,setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(0);
    const [property] = useProperty(asc,search,currentPage,itemsPerPage)
    const {count} = useLoaderData()

    console.log(count)
  const numberOfPages = Math.ceil(count/itemsPerPage)

  const pages = [...Array(numberOfPages).keys()];



    const handleSearch = (e) => {
        e.preventDefault();
        const searchText = e.target.search.value;
    
        console.log(searchText);
        setSearch(searchText);
      };

      const handleItemsPerPage = e =>{
        const val = parseInt(e.target.value);
        console.log(val);
        setItemsPerPage(val)
        setCurrentPage(0)
      }
    
      const handlePreviousPage=()=>{
        if (currentPage>0) {
          setCurrentPage(currentPage-1)
        }
      }
      const handleNextPage=()=>{
        if (currentPage<pages.length-1) {
          setCurrentPage(currentPage+1)
        }
      }
    







    return (
        <div>
            
            <SectionTitle>
            subHeading={"Properties"}
        heading={"All Properties"}
            </SectionTitle>
            <form className="text-center mt-6" onSubmit={handleSearch}>
        <input
          type="text"
          name="search"
          placeholder="Search here"
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <input type="submit" value="search" className="btn btn-ghost " />
      </form>
      <button className="btn btn-secondary m-5" onClick={() => setAsc(!asc)}>
        {asc ? "Price: Low to High" : "Price: High to Low"}
      </button>
            
            <div className="grid md:grid-cols-3 gap-3 grid-cols-1">
            {
                property?.map(properties=><Properties key={properties._id} properties={properties}></Properties>)
            }
        </div>
        <div className="pagination">
    

<p>current Page:{currentPage}</p>
<button onClick={handlePreviousPage}>Previous</button>
      {
        pages.map(page=><button
        className={currentPage === page ? 'selected':undefined}
         onClick={()=>setCurrentPage(page)} 
        key={page}>{page}</button>)
      }
      <button onClick={handleNextPage}>Next</button>
       <select value={itemsPerPage} onChange={handleItemsPerPage} name="" id="">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                  
                </select>

      </div>
        </div>
    );
};

export default AllProperties;