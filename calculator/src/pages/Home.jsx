import Output from "../components/Output";
import Button from "../components/Button";
import OperationButton from "../components/OperationButton";
import ClearAllButton from "../components/ClearAllButton";
import "./Home.css";
import { useRef, useState } from "react";

const Home = () => {
  const [output, setOutput] = useState("");
  const inputRef = useRef(null);

  const takeInput = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="div">
          <div>
            <Output text={output} />
          </div>
          <div className="row ">
            <div className="col-sm">
              <Button text="9" fn={takeInput} />
            </div>
            <div className="col-sm">
              {" "}
              <Button text="8" fn={takeInput} />
            </div>
            <div className="col-sm">
              {" "}
              <Button text="7" fn={takeInput} />
            </div>
            <div className="col-sm">
              {" "}
              <Button text="6" fn={takeInput} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              {" "}
              <Button text="5" fn={takeInput} />
            </div>
            <div className="col-sm">
              {" "}
              <Button text="4" fn={takeInput} />
            </div>
            <div className="col-sm">
              {" "}
              <Button text="3" fn={takeInput} />
            </div>
            <div className="col-sm">
              {" "}
              <Button text="2" fn={takeInput} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              {" "}
              <Button text="1" fn={takeInput} />
            </div>
            <div className="col-sm">
              {" "}
              <Button text="+" fn={takeInput} />
            </div>
            <div className="col-sm">
              {" "}
              <Button text="-" fn={takeInput} />
            </div>
            <div className="col-sm">
              {" "}
              <Button text="*" fn={takeInput} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              {" "}
              <Button text="/" fn={takeInput} />
            </div>
            <div className="col-sm">
              {" "}
              <ClearAllButton />
            </div>
            <div className="col-sm">
              {" "}
              <Button text="X" />
            </div>
            <div className="col-sm">
              {" "}
              <OperationButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
