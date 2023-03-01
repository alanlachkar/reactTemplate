const HomePage = () => {
  return (
    <>
      <header style={{ gridArea: 'nav', backgroundColor: 'green' }}>Nav</header>
      <main style={{ gridArea: 'main', display: 'flex' }}>
        <div style={{ backgroundColor: 'violet', flexGrow: 1 }}>Main 1</div>
        <div style={{ backgroundColor: 'yellow', flexGrow: 1 }}>Main 2</div>
      </main>
    </>
  );
};

export default HomePage;
