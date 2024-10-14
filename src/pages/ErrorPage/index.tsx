import { useRouteError } from "react-router-dom";

const ErrorPage = () => {

  const error = useRouteError();
  console.error(error);

  return (
    <div className="w-full h-dvh bg-black/80 flex flex-col items-center justify-center gap-10">
        <h1 className="text-white font-bold text-4xl">404 - PAGE NOT FOUND </h1>
        <p className="text-white font-semibold text-xl">Back to home</p>
        <p>
          <i>{error.statusText} - {error.error.message}</i>
        </p>
    </div>
  )
}

export default ErrorPage