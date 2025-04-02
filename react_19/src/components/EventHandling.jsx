export const EventHandling = () =>{
    // function handleButtonClick(){  // normal function
    //     alert("Hey, I am on click event")
    // }

    const handleButtonClick = (event) =>{ // arrow fun
        console.log(event)
        alert("Hey, I am on click Event")
    }
    const handleWelcomeUser = () => {
        console.log('hey user, welcome')

    }


    return (
        <>

        <button onClick={handleButtonClick}>Click me</button>
        <br />

        <button onClick={() => handleButtonClick()}>Click me 2</button>
        <br />
        <button onClick={() => alert("Hey, I am inline event function")}> Inline Arrow Fun</button>
        <br /> 
        <button onClick={() => handleWelcomeUser("Vinod")}>Click me</button>
        </>

        
    )
}