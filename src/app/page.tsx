import CountryList from '../app/components/country-list';

const countries = [
  { name: 'India', flag: '🇫🇷' },
  { name: 'USA', flag: '🇺🇸' },
  { name: 'France', flag: '🇫🇷' },
];

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Country Selection</h1>
      <CountryList countries={countries} />
    </div>
  );
};

export default Home;
