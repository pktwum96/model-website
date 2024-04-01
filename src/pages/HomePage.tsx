import ImagesRenderer from "../components/ImagesRenderer";

function HomePage() {
  return (
    <div>
      <ImagesRenderer seeMore itemsToDisplay={6} type="quilted" />
    </div>
  );
}

export default HomePage;
