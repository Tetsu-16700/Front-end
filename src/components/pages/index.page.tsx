import { useEffect, useState } from "react";
import DetailElement from "../elements/detail.element";
import FormElement from "../elements/form.elements";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { AuthHook } from "../hooks/auth.hook";

function IndexPage() {
  const navigate = useNavigate();
  const [section, setSection] = useState("upload");

  const { validateSession } = AuthHook();

  // borra los datos de nevegacion d elocaStoage
  function handleLogout() {
    window.localStorage.clear();
    navigate("/login");
  }

  // asegura que la sesión del usuario se valide al cargar la página inicial
  useEffect(() => {
    validateSession();
  }, []);

  if (section === "upload") {
    return (
      <>
        <header className="w-full flex justify-between">
          <h1 className="mt-20 text-left w-full ml-40 text-2xl font-serif">
            Sistema de carga de datos
          </h1>
          <Button
            className="bg-blue-500 text-white px-4 py-2 rounded-full float-right font-serif m-10   "
            onClick={handleLogout}
          >
            Logout
          </Button>
        </header>
        <div className="w-full flex flex-col items-center">
          <FormElement setSection={setSection}></FormElement>
        </div>
      </>
    );
  } else if (section === "detail") {
    return (
      <>
        <header className="w-full flex justify-between">
          <h1 className="mt-20 text-left w-full ml-40 text-2xl font-serif">
            Sistema de carga de datos
          </h1>
          <Button
            className="bg-blue-500 text-white px-4 py-2 rounded-full float-right font-serif m-10   "
            onClick={handleLogout}
          >
            Logout
          </Button>
        </header>
        <div className="w-full flex flex-col items-center">
          <DetailElement setSection={setSection}></DetailElement>
        </div>
      </>
    );
  }
}

export default IndexPage;
