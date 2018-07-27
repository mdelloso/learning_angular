export class UsersService {
  users = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ];

  getUsers() {
    return this.users;
  }

  gerUserName(id: number): string {
    const user = this.users.find(
      (s) => {
        return s.id === id;
      }
    );
    return user.name;
  }
}
