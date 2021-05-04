const Tweet = ({username, name, date, msg}) => (
    <div>
        <p><b>{name}</b>: {msg}</p>
        <small><em>Created by: @{username}</em></small>
        <p><small>{date}</small></p>
    </div>
);