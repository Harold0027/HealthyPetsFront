import UserLayout from "../layouts/UserLayout";
import VeterinariosContainer from "../features/GestionVeterinarios/VeterinariosListContainer";

const VeterinariosUser = () => {
  return (
    <UserLayout>
      <VeterinariosContainer />
    </UserLayout>
  );
};

export default VeterinariosUser;
