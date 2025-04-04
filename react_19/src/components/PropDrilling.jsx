export const ParentComponent = () => {
    return (
        <section>
            <h1>Hello Component A</h1>
            <ChildComponent data = "React JS" />
        </section>
        
    )
}

const ChildComponent = (props) => {
    return(
        <div>
            <h1>Hello, I am a component B</h1>
            <GrandChildComponent data = {props.data} />
        </div>
    )
}

const GrandChildComponent = (props) => {
    return(
        <div>
            <h1>Hello, I am a component C</h1>
            <GrandGrandChildComponent data = {props.data} />
        </div>
    )
}

const GrandGrandChildComponent = (props) => {
    return(
        <div>
            <h1>Hello, I love {props.data}</h1>
           
        </div>
    )
}