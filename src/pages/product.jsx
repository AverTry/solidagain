import { useParams } from "@solidjs/router"

function products() {
  return (
    <div>
      <h1>product : {useParams().id}</h1>
    </div>
  )
}
export default products
