import classes from './MeetUpItem.module.css'

const MeetUpItem = ({ address, title, id, image, description}) => {
    return (
        <ul className={classes}>
            <h2>{title}</h2>
        </ul>
    )
}

export default MeetUpItem
