import { Slash } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useLocation } from "react-router-dom";

export function BreadcrumbComponent() {
  const { pathname } = useLocation();
  const paths = pathname.split("/").slice(1); // Eliminar la primera barra vacía

  // Generar la ruta acumulativa para cada parte del breadcrumb
  const generatePath = (index: number) => {
    return `/${paths.slice(0, index + 1).join("/")}`;
  };

  return (
    <Breadcrumb className="">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        {paths.length > 0 && (
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
        )}

        {/* Generar los BreadcrumbItem dinámicamente */}
        {paths.map((path, index) => {
          const isLast = index === paths.length - 1;
          const fullPath = generatePath(index);

          return (
            <>
              <BreadcrumbItem>
                {/* Si es el último, solo mostramos el texto, si no, creamos un enlace */}
                {isLast ? (
                  <BreadcrumbPage>{path}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={fullPath}>{path}</BreadcrumbLink>
                )}
              </BreadcrumbItem>

              {/* Solo añadimos el separador si no es el último elemento */}
              {index < paths.length - 1 && (
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
              )}
            </>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
