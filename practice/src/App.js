import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="font-mono font-bold text-3xl text-cyan-400">
        Hello World
      </h1>
      <div className="w-36 h-12 bg-slate-500">Div</div>
      {/* margin top */}
      <div className="w-36 h-12 bg-slate-600 mt-6">mt-6</div>
      {/* margin right */}
      <div className="w-36 h-12 bg-slate-600 mr-4">mr-4</div>
      {/* margin left */}
      <div className="w-36 h-12 bg-slate-600 ml-2">ml-2</div>
      {/* margin bottom */}
      <div className="w-36 h-12 bg-slate-600 mb-8">mb-8</div>
    </div>
  );
}

export default App;
