import Navigation from './Navigation';
import { HiHome, HiAdjustments, HiArchive } from 'react-icons/hi';

export const navItems = [
  { to: '/home', text: 'Main', icon: <HiHome /> },
  { to: '/about', text: 'About us', icon: <HiAdjustments /> },
  { to: '/contacts', text: 'Contacts', icon: <HiArchive /> },
];

const Stories = {
  title: 'Navigation',
  component: Navigation,
};
export default Stories;

const Template = args => <Navigation {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: navItems,
};
