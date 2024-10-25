export const EventHandling = () => {

    const handler =(user) => {
        alert(`Hello ${user} , Welcome!`);
    }

    const Hower = () => {
        alert("Hovering on the button");
    }

    return (
        <WelcomeUser onClick={()=>handler('Ram')} onMouse={Hower}></WelcomeUser>
    )
}

const WelcomeUser = (props) => {
    const hello = () => {
        alert("Hello, Welcome!");
        props.onClick("USer");
    }
    return (
        <><button onClick={props.onClick}>Click Me</button>
        <button onMouseEnter={props.onMouse}>Click Me</button>
        <button onClick={hello}>Click Me</button></>  
    )
}
