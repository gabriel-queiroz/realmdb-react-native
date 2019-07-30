export default class PeopleSchema {
  static schema = {
    name: "People",
    primarykey: "id",
    properties: {
      id: {
        type: "int",
        indexed: true
      },
      name: "string",
      date: "date"
    }
  };
}
