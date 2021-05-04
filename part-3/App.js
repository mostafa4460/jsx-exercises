const App = () => (
    <div>
        <Person name="moose" age={24} hobbies={["Gaming", "Lifting", "Soccer"]} />
        <Person name="asasdasdadadasdasdad" age={16} hobbies={["Gaming", "Vaping"]} />
        <Person name="hossam" age={23} hobbies={["Lifting", "Investing"]} />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));