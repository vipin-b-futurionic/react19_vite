import { useRouteError } from "react-router"

export const ErrorPage = () => {

    const error = useRouteError()
    console.log(error);
    

    return <h1> 404 error page </h1>
}