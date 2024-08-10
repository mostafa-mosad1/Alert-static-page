import { X } from "lucide-react";
import "./index.scss"
import { ReactNode } from "react";


interface Iprops {
    type:string,
    icon:ReactNode,
    titlt:string,
    des?:string,
    childern?:ReactNode
}
function index({type,icon,titlt,des,childern}:Iprops) {
  return (
    <>
      <div className={type}>
        <div className="head">
          <h2 className="title">
            {/* <Ban size={18} /> */}
            {icon}
            {titlt}
            
          </h2>
          <X />
        </div>
        <div className="des">
         {childern?childern:des}
        </div>
      </div>
    </>
  );
}

export default index;
