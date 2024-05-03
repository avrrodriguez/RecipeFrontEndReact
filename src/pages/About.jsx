import { PageHeading } from "../components/PageHeading"

export function About(props) {
    return (
        <div>
            <PageHeading pageTitle="About Page"/>
            <h2>{props.pageTitle}</h2>
        </div>
    )
}