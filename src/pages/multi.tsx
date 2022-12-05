import Step from "../components/Step"
import Stepper from "../components/Stepper"

const MultiPage = () => {
  return(
    <div className = "flex justify-center">
      <div className="w-screen h-screen flex flex-col items-center justify-start">
        <Stepper />
        <Step />
      </div>
    </div>
  )
}
export default MultiPage