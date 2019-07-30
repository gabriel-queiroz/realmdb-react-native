import PeopleRepository from "../schemas/PeopleSchema";
import Realm from "realm";

const getRealm = () => {
  return Realm.open({
    schema: [PeopleRepository]
  });
};

export default getRealm;
