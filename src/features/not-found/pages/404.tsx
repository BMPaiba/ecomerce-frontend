interface Props {}

export const NotFound = ({}: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-8">
        <p className="font-medium text-xl mb-4">¡UPS, algo salió mal!</p>
        <img src="/assets/404/not-found.webp" alt="404 not found" />
        <p className="text-center">La página que estás buscando no se encontró</p>
    </div>
  );
};