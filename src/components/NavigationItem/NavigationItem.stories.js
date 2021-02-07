import NavigationItem from './NavigationItem';
import { HiHome } from 'react-icons/hi';

const Stories = {
  title: 'NavigationItem',
  component: NavigationItem,
};
export default Stories;

const Template = args => <NavigationItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  to: '/home',
  text: 'Main',
  icon: <HiHome />,
};

Default.parameters = {
  pathname: '/home',
};
