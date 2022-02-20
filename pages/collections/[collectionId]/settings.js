import MainLayout from "../../../components/Layout/MainLayout";

function Settings() {
  return <div>Settings</div>;
}

export default Settings;

Settings.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
