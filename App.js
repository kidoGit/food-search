import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Restaurant Search'
    }
  }
);

export default createAppContainer(navigator);

// nI8BDds-G9U0SiLGDjtciw
// khVfVymwqFVf1e1YppdwcRGCzMYY4NlauSLEvwT92z8ojkdQOwfuiDlooCVczXBcOlFuQslbx77P6ILD-BclTqnlDn04lbKWBT9I3TeuMT9stb8OnjbKeWBuN4m1XnYx