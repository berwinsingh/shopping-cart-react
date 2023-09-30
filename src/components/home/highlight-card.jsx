const HighlightGame = () => {
  return (
    <>
      <div
        id="highlighted-game"
        className="w-screen h-80 flex justify-center items-center"
        style={{
          backgroundImage: "url(/lorenzo-herrera-p0j-mE6mGo4-unsplash.jpg)",
          backgroundPositionY: "45%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h2 className="font-staatliches text-white text-8xl drop-shadow-xl">Game Catalog</h2>
      </div>
    </>
  );
};

export default HighlightGame;
