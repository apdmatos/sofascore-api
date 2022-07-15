export default interface Sport {
  id: number;
  name: string;
  slug: string;
  category: {
    id: number;
    name: string;
    slug: string;
    flag: string;
    sport: {
      id: number;
      name: string;
      slug: string;
    };
  };
  userCount: number;
}
