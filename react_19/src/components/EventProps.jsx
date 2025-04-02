export const EventProps = () =>{
    const HandleWelcomeUser = (user) => {
        alert(`Hey , ${user}`)

    }

    const handleHover = () => {
        alert(`Hey thanks to hover`)
    }
    return(
        <>
           < WelcomeUser onClick = {() => HandleWelcomeUser("vinod")} 
           onMouseEnter={handleHover}
           />
        </>
    )

}

const WelcomeUser = (props) => {
    const handleGreeting = () =>{
        console.log(`hey user, welcome`)
        props.onClick()
    }
    return (
        <>
        <button onClick={props.onClick}>Click</button>
        <button onMouseEnter={props.onMouseEnter}>Hover Me</button>
        <button onClick={handleGreeting}>Greeting</button>
        </>
    )
}