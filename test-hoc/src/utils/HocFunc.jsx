

function HocFunc(Component) {
    const isAuth = false;
    const WraperFunction=(props)=>{
        return isAuth ? <Component {...props} /> : <div>
            <h3>Pls Login..</h3>
        </div>
    }
    return WraperFunction;
}

export default HocFunc;
