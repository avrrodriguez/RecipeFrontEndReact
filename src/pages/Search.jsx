import { PageHeading } from "../components/PageHeading"

export function Search(props) {
    return (
        <div>
            <PageHeading pageTitle="Search Page"/>
            <h2>{props.pageTitle}</h2>
        </div>
    )
}