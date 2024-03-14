import { useState } from "react";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

function FormElement({ setSection }: { setSection: any }) {
  // seleccionara o no el archivo del usuario
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const { toast } = useToast();

  // funcion que comprueba si se ha seleccionado un archivo o no
  function handleSubmit() {
    if (selectedFile) {
      // maneja la carga del archivo
      toast({
        title: "Cargando...",
        description: "Estamos validando el archivo 🗃️",
        duration: 2000,
      });
      setTimeout(() => {
        setSection("detail");
      }, 2000);
    } else {
      toast({
        // maneja la falta del archivo
        variant: "destructive",
        title: "Hey !",
        description: "Primero selecciona un archivo 📂",
        duration: 2000,
      });
      setTimeout(() => {
        setSection("upload");
      }, 2000);
    }
  }

  return (
    <div className="mx-10 border shadow-md rounded-lg flex flex-col  gap-8 items-center p-40 mt-10">
      <label className="font-serif" htmlFor="">
        Selecciona un archivo
      </label>
      <input
        accept=".xlsx, .csv"
        type="file"
        // evento que se produce cuando cambia el valor de entrada =>
        // cuando el evento se activa adjuntando archivo caso contrario null
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSelectedFile(e.target.files ? e.target.files[0] : null)
        }
      />
      <Button className="bg-blue-500 font-serif" onClick={handleSubmit}>
        Upload file
      </Button>
    </div>
  );
}

export default FormElement;
