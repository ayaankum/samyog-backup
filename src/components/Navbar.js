import "./NavbarStyles.css";
function Navbar(){
    return(
        <>
        <nav>
            <a href="index.html">
            <img width="90" height="45" viewBox="0 0 49 48" src="logo.png" alt="foreground"></img>
            </a>
            <div class="nav">
                <ul id="navbar">
                    <li>
                        <a href="index.html">Home</a>
                        <a href="index.html">Blog</a>
                        <a href="index.html">About</a>
                        <a href="index.html">Contact</a>

                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar;
