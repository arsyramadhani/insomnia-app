import MainLayout from "../../../components/Layout/MainLayout";

function Overview() {
  return <div>Overview</div>;
}

export default Overview;

Overview.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
