import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
// Make Enzyme functions available in all test files without importing

const fakeNewsData = {
  about_id: 1,
  createdAt: "2019-01-01T21:15:36.000Z",
  description: "Corporis possimus quae dolore deleniti illum.",
  hour: "5h",
  id: 2,
  name: "Lang, Leffler and Hirthe",
  pictureUrl: "https://s3.amazonaws.com/fec-morgan/news8.jpeg",
  title: "Doloribus id eaque provident.",
  updatedAt: "2019-01-01T21:15:36.000Z",
  views: 98999
}

const fakeDescriptionData ={
  avgVolume: "13.11",
  ceo: "Jess Langworth",
  createdAt: "2019-01-01T21:15:36.000Z",
  description: "At et iste qui velit qui facere. Inventore harum dolores voluptatum provident velit vitae. Eum vero necessitatibus quae et quaerat quia. Dolore minima quis commodi impedit ad. Error hic aliquam. Aut explicabo quia quia sit aut at eius rerum.Quo odio dolorem sed eligendi eum id ab maxime sed. Incidunt facilis voluptatem nam in quisquam est et. Libero excepturi at veritatis temporibus labore et. Beatae magni sed laudantium aut eum ut exercitationem. Animi nisi quia consequuntur deserunt.Laborum quo ullam velit minima nostrum modi magnam qui. Beatae nobis quidem sed. Fuga doloremque et et laudantium occaecati harum. Voluptate ut eum non.Eos est repellat et et labore. Rerum eveniet ipsum dignissimos provident eos. Vero eos quidem ducimus quam corporis dicta voluptates.Qui in minima ut facilis illo voluptatem. Sint vel recusandae mollitia necessitatibus. Aspernatur repellendus velit nesciunt consequuntur magnam aut ut. Error qui maxime consectetur natus voluptas enim qui nemo. Aut est asperiores molestiae sit aspernatur temporibus.",
  dividendYield: 0,
  employees: 5502,
  founded: 1999,
  headquarters: "Stewartport, Virginia",
  highToday: "163.91",
  id: 1,
  lowToday: "122.25",
  marketCap: "115.64",
  minimized: "Voluptatem dolor impedit exercitationem.Minima deserunt molestias accusamus eligendi omnis quia quo consequatur.",
  openPrice: "222.94",
  priceEarnings: "90.31",
  updatedAt: "2019-01-01T21:15:36.000Z",
  volume: "4.91",
  weekHigh: "403.25",
  weekLow: "168.36"
}

const handleClick = () => {
  this.setState({
    open: !this.state.open
  });
}

export { fakeNewsData, fakeDescriptionData, handleClick };
