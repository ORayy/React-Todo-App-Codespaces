import { useLoaderData} from "react-router-dom"

export default function Careers() {
  const careers = useLoaderData
  // console.log(careers);

  return (
    <section className="careers-data">
      {/* {careers.map(career => (
        <Link to='careers' key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>

        </Link>
      )) */}
        {/* // <h2>Careers List</h2>
        // <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, suscipit.</p>
      } */}

      careers

      
    </section>
  )
}

// data/db.json
// /workspaces/React-Todo-App-Codespaces/data/db.json

// loader function

export const careersLoader = async () => {
  const res = await fetch('./data/db.json')
  return res.json

}

// const res = await fetch('./data/db.json')
