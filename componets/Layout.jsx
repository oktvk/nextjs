const Layout = ({Children}) => {
    return (
        <div className="content">
            <h1>This is Layout!</h1>
            {Children}
        </div>
    );
}

export default Layout;