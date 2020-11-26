// import Painting from './components/Painting';
import PaintingList from './components/PaintingList';
import Section from './components/Section';

import paintings from './paintings.json';

export default function App() {
  // const isOnline = false;
  return (
    <div>
      {/* <PaintingList items={paintings} /> */}
      <Section title="Top of the week">
        <PaintingList items={paintings} />
      </Section>

      <Section title="The best">
        <PaintingList items={paintings} />
      </Section>
      {/* {paintings.map(painting => (
        <Painting
          key={painting.id}
          url={painting.url}
          title={painting.title}
          authorName={painting.author.tag}
          authorUrl={painting.author.url}
          price={painting.price}
          quantity={painting.quantity}
        />
      ))} */}
      {/* {[1, 2, 3, 4, 5].map(el => (
        <div>{el}</div>
      ))} */}
      {/* {isOnline && 'Online'}
      {isOnline ? 'Online' : 'Offline'}

      <Painting
        url={paintings[0].url}
        title={paintings[0].title}
        authorName={paintings[0].author.tag}
        authorUrl={paintings[0].author.url}
        price={paintings[0].price}
        quantity={paintings[0].quantity}
      />

      <Painting
        url={paintings[1].url}
        title={paintings[1].title}
        authorName={paintings[1].author.tag}
        authorUrl={paintings[1].author.url}
        price={paintings[1].price}
        quantity={paintings[1].quantity}
      />

      <Painting
        url={paintings[2].url}
        title={paintings[2].title}
        authorName={paintings[2].author.tag}
        authorUrl={paintings[2].author.url}
        price={paintings[2].price}
        quantity={paintings[2].quantity}
      /> */}
    </div>
  );
}
