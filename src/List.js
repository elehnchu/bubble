import './App.css';

function List(){
    return (
        <>
            <div className="Header">
            Bubbles
            </div>
            <div className = "List">
                <ListItem  icon="X" groupName="Group 1" description= "Lorem ipsum dolor sit ame"></ListItem>
                <ListItem  icon="X" groupName="Group 2" description= "Lorem ipsum dolor sit ame"></ListItem>
                <ListItem  icon="X" groupName="Group 3" description= "Lorem ipsum dolor sit ame"></ListItem>
                <ListItem  icon="X" groupName="Group 4" description= "Lorem ipsum dolor sit ame"></ListItem>
            </div>
        </>
    );
}

export default List;

function ListItem ({icon, groupName, description}) {
    return (
        <div className = "list-item">
            <div className = "list-item-icons">{icon}</div>
            <div>
                <div className = "list-item-group-name">{groupName}</div>
                <div className = "list-item-description">{description}</div>
            </div>
        </div>
    );
}