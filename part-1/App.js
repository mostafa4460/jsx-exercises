const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name="Moose" />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));