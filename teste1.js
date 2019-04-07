import './style.css';

class palavra{
  constructor() {
    super();
    this.palavra = {
      name: 'teste1'
    };
  }

  render() {

    var a;
    typeof a;				// "undefined"

    a = "hello world";
    typeof a;				// "string"

    a = 42;
    typeof a;				// "number"

    a = true;
    typeof a;				// "boolean"

    a = null;
    typeof a;				// "object" -- weird, bug

    a = undefined;
    typeof a;				// "undefined"

    a = { b: "c" };
    typeof a;				// "object"

    return (

    

      <div>
        <Hello name={this.palavra.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
