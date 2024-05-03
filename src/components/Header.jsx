import "./Header.css"
import { PageHeading } from "./PageHeading"

export function Header() {
    return (
        <header>
            <div className="top-bar-header">
                <nav>
                    <a href="/">Home</a> | <a href="/about">About</a>
                </nav>
            </div>
        </header>
    )
}