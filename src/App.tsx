import "./App.css";
import Alert from "../src/component/ui/Alert";
import "../src/component/ui/Alert/index.scss";
import { Ban,Aperture,BriefcaseBusiness,Clock,Layers    } from "lucide-react";
function App() {
  return (
    <>
      <Alert
        titlt="Some Thing Went Wrong"
        icon={<Ban size={18} />}
        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nesciunt repellendus distinctio"
        type="danger"
      ></Alert>
      <Alert
        titlt="Some Thing Went Wrong"
        icon={ <BriefcaseBusiness />}
        childern={
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            <a href="#"> nesciunt repellendus distinctio</a> quibusdam facilis
            autem ipsa quis voluptates quisquam saepe.
          </p>
        }
        type="waring"
      ></Alert>
      <Alert
        titlt="Some Thing Went Wrong"
        icon={<Aperture size={22} />}
        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nesciunt repellendus distinctio"
        type="sucss"
      ></Alert>

<Alert
        titlt="Some Thing Went Wrong"
        icon={<Clock style={{color:"white", fontWeight:"bold"}}  size={23} />}
        childern={
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            <a href="#"> nesciunt repellendus distinctio</a> quibusdam facilis
            autem ipsa quis voluptates quisquam saepe.
          </p>
        }
        type="gry"
      ></Alert>
      
      <Alert
        titlt="Some Thing Went Wrong"
        icon={<Layers  style={{color:"black", fontWeight:"bold"}}  size={23} />}
        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nesciunt repellendus distinctio consectetur adipisicing elit. Ducimus nesciunt repellendus distinctio"
        type="done"
      ></Alert>
    </>
  );
}

export default App;
