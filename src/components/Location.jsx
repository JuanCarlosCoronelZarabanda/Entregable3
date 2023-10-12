import { IconSearch } from "@tabler/icons-react"
import axios from "axios"

const Location = ({ location, setLocation }) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const idLocation = e.target.idLocation.value;

    axios
      .get(`https://rickandmortyapi.com/api/location/${idLocation}`)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err))
  }

  return (


    <section className=" overflow-hidden  flex items-center justify-center ">
      <div className="w-full bg-no-repeat bg-cover bg-[url('public/img01.png')] py-5 px-20 " >
        <div  className="relative style={{ paddingBottom: '100%' }} flex items-center justify-center h-full w-full  border-opacity-100 ">

          <section>
            <div>

            <img className="h-100 w-100 rounded-full animate-spin duration-1000 " src="public/img2.png" alt="" />
            
            <img className="h-full w-full" src="public/img3.png" alt="" />
            </div>



          </section>
        </div>

        <div className="py-5 px-5">

          <form onSubmit={handleSubmit} className="flex px-6 py-6 items-center justify-center ">
            <input placeholder="type a new location..." name="idLocation" className="text-black border-solid border-[5px] border-green-500 " type="number" required />
            <button type="submit" className="flex gap-2 items-center bg-green-900 px-3 border-solid border-[5px] border-green-500 ">
              <span >Search</span> <IconSearch size={18} stroke={3} />
            </button>
            <h1 className="text-green-500">¡You have fallen 
            into dimension #{location?.id}!</h1>
          </form>
        </div>


        {/* Location info */}

        <div className="border-solid border-[6px] border-green-500 py-6  text-center">
          <section>
            <h1 className="text-green-500">¡Wellcome to {location?.name}!</h1>

            <div className="grid grid-cols-3 gap-4 px-3 ">
              <div className="col-span-1">
                <h2>Type: {location?.type}</h2>
              </div>
              <div className="col-span-1">
                <h2>Dimension: {location?.dimension}</h2>
              </div>
              <div className="col-span-1">
                <h2>Population: {location?.residents.length}</h2>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default Location