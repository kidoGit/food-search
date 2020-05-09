import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer khVfVymwqFVf1e1YppdwcRGCzMYY4NlauSLEvwT92z8ojkdQOwfuiDlooCVczXBcOlFuQslbx77P6ILD-BclTqnlDn04lbKWBT9I3TeuMT9stb8OnjbKeWBuN4m1XnYx'
    }
});