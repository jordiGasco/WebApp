'use strict';

// import all required modules
import logger from '../utils/logger.js';

// create welcome object
const welcome = {

  // index method - responsible for creating and rendering the view
  index(request, response) {

    // display confirmation message in log
    logger.info('welcome rendering');

    // create view data object (contains data to be sent to the view e.g. page title)
    const viewData = {
      title: 'Welcome Company Product Collection',
    };

    // render the start view and pass through the data
    response.render('welcome', viewData);
  },
};

// export the welcome module
export default welcome;