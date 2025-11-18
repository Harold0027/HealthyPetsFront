import UserLayout from "../layouts/UserLayout";
import PacientesContainer from "../features/GestionPacientes/PacientesContainer";

const PacientesUser = () => {
  return (
    <UserLayout>
      <PacientesContainer />
    </UserLayout>
  );
};

export default PacientesUser;
