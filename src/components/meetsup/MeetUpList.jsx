import classes from "./MeetUpList.module.css";
import MeetUpItem from "./MeetUpItem";

const MeetUpList = ({ data }) => {
  return (
    <ul className={classes.list}>
      {data.map(({ address, description, id, image, title }) => {
        return (
          <MeetUpItem
            key={id}
            address={address}
            description={description}
            id={id}
            image={image}
            title={title}
          />
        );
      })}
    </ul>
  );
};

export default MeetUpList;
