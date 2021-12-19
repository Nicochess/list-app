import classes from './NewMeetUpForm.module.css'
import Card from '../ui/Card'
import { useRef } from 'react'

const NewMeetUpForm = ({ onAdd }) => {
    const titleRef = useRef()
    const imageRef = useRef()
    const addressRef = useRef()
    const descriptionRef = useRef()

    const handlerSubmit = (e) => {
        e.preventDefault();

        const enteredTitleRef = titleRef.current.value;
        const enteredImageRef = imageRef.current.value
        const enteredAddressRef = addressRef.current.value;
        const enteredDescriptionRef = descriptionRef.current.value

        const formData = {
            title: enteredTitleRef,
            image: enteredImageRef,
            address: enteredAddressRef,
            description: enteredDescriptionRef
        }

        onAdd(formData)
    }   

    return (
        <Card>
            <form className={classes.form} onSubmit={handlerSubmit}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required  id='title' ref={titleRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" required  id='image' ref={imageRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" required  id='address' ref={addressRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea id='description' rows='5' required ref={descriptionRef} />
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetUpForm
