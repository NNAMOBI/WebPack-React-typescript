import ClickCounter from './ClickCounter';
import './styles.css';

const App = () => {
    return (
      <>
        <h1>
          Hello Everyone!! Welcome to Webpack starter react Configuration -{" "}
          {process.env.NODE_ENV}- {process.env.name}
            </h1>
            <ClickCounter />
      </>
    );
}

export default App;