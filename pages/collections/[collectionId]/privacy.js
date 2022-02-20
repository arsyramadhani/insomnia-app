import MainLayout from "../../../components/Layout/MainLayout";

function Privacy() {
  return <div>Privacy</div>;
}

export default Privacy;

Privacy.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
