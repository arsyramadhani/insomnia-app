import MainLayout from "../../../components/Layout/MainLayout";

function Guests() {
  return <div>Guests</div>;
}

export default Guests;

Guests.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
