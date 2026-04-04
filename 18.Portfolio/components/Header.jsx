const Header=()=>{
    return (
        <header className="bg-primary text-white p-5">
            {/* Using Float */}
            {/* <div style={{height:'60px'}}>
                <h1 className="float-start">Your Name</h1>
                <div className="float-end">
                    <button className="btn btn-dark">Dark</button>
                    <button className="btn btn-light">Light</button>
                </div>
            </div> */}

            {/* Using Flex */}
            <div className="d-flex justify-content-between align-items-center">
                <h1>Your Name</h1>
                <div>
                    <button className="btn btn-dark">Dark</button>
                    <button className="btn btn-light ms-2">Light</button>
                </div>
            </div>
            <p>
                Phone: <a className="text-white text-decoration-none" href="tel:9898989898">9898989898</a>
                &nbsp;&nbsp;
                Email: <a className="text-white text-decoration-none" href="mailto:xyz@gmail.com">xyz@gmail.com</a>
            </p>
        </header>
    );
}
export default Header;