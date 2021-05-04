const App = () => (
    <div>
        <Tweet username="moose" name="moose" date="05/04/2021" msg="Hi, i'm moose" />
        <Tweet username="stevie chicks" name="steve" date="05/02/2021" msg="bak bak bak" />
        <Tweet username="idk" name="idk" date="Yesterday" msg="hmmmmmm" />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));