import PolicyList from "./components/PolicyList";

function App() {
  return (
    <main
      className="
      min-h-screen
      bg-slate-100
      p-4
      md:p-10"
    >
      <div className="max-w-7xl mx-auto">
        <PolicyList />
      </div>
    </main>
  );
}

export default App;