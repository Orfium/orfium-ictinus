import { atoms, semantic, tokens } from '@orfium/tokens/css';
import '@orfium/tokens/styles.css';
import './App.css';

function App() {
  return (
    <div>
      <div
        style={{ backgroundColor: semantic.color.background.inverted, padding: tokens.spacing[12] }}
      >
        <p>styled with semantic tokens</p>
      </div>
      <div
        className={atoms({
          backgroundColor: 'blue.5',
          padding: 'md',
        })}
      >
        <p>styled by referencing the css variables</p>
      </div>
    </div>
  );
}

export default App;
