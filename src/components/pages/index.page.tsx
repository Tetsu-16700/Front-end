import { useState } from "react";

import DetailElement from "../elements/detail.element";
import FormElement from "../elements/form.elements";

function IndexPage() {
  const [section, setSection] = useState("upload");

  if (section === "upload") {
    return (
      <div className="w-full flex flex-col items-center">
        <h1 className="mt-20 text-left w-full ml-40 text-2xl">
          Sistema de carga de datos
        </h1>
        <FormElement setSection={setSection}></FormElement>
      </div>
    );
  } else if (section === "detail") {
    return (
      <div className="w-full flex flex-col items-center">
        <h1 className="mt-20 text-left w-full ml-40 text-2xl">
          Sistema de carga de datos
        </h1>
        <DetailElement setSection={setSection}></DetailElement>
      </div>
    );
  }
}

export default IndexPage;