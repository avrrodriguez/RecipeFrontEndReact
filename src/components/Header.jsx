import "./Header.css"

export function Header() {
    return (
        <header>
            <div className="top-bar-header">
                <nav>
                    <a href="#">Home</a> | <a href="#">Link</a>
                </nav>
            </div>
            <div className="main-heading-div">
                <h1>Main Site heading</h1>
            </div>
        </header>
    )
}