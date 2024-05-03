import "./PageHeading.css"

export function PageHeading(props) {
    return (
        <div className="main-heading-div">
            <h1>{props.pageTitle}</h1>
        </div>
    )
}