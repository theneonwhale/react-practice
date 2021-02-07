import Logo from './Logo';
import { HiHome, HiAdjustments, HiArchive } from 'react-icons/hi';

const navItems = [
  { text: 'Main', icon: <HiHome /> },
  { text: 'About us', icon: <HiAdjustments /> },
  { text: 'Contacts', icon: <HiArchive /> },
];

const Stories = {
  title: 'Logo',
  component: Logo,
};
export default Stories;

const Template = args => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  imgUrl: 'https://www.flaticon.com/premium-icon/icons/svg/3006/3006876.svg',
};
