import NewMeetUpForm from "../components/meetsup/NewMeetUpForm"
import { useNavigate } from 'react-router-dom'

const Meetup = () => {
    let navigate = useNavigate()

    const onAdd = (meetupData) => {
        fetch('https://list-app-f2951-default-rtdb.firebaseio.com/meetups.json', 
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(meetupData)
        }).then(() => {
            navigate('/')
        })
    }

    return (
        <section>
            <h1>Add a new meetup</h1>
            <NewMeetUpForm onAdd={onAdd}/>
        </section>
    )
}

export default Meetup
