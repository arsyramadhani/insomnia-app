import MainLayout from "../../../components/Layout/MainLayout";

function Integration() {
  return <div>Integration</div>;
}

export default Integration;

Integration.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
