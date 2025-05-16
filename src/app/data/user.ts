export interface User {
  id: String;
  name: String;
  email: String;
}
export type UserUpdateInput = Omit<User, "id">;

export const CATEGORIES = [
  {
      id: 'cf7df5b7-f42d-424a-bec3-1547f068b4ca',
      name: 'Gomes Aurelia',
      email: 'exemple@test.com',
    },
  {
      id: 'cf7df5b7-f42d-782g-bec3-njowf068b4ca',
      name: 'Gomes Aurelia2',
      email: 'exemple2@test.com',
  },
];
