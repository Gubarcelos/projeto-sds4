import ImgDsDark from 'assets/img/logo-brado.svg';
const NavBar = () => {
    return (
        <div className="d-flex flex-colum flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
            <nav className="my-2 my-md-0 mr-md-3" >
            <img src={ImgDsDark} alt="DevSuperior" width="120" />
            </nav>
            <h2>Sales Dashboard </h2>
        </div>
    );
}

export default NavBar;