import ConnectRoute from 'connect-route';
import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';
import Links from '../imports/collections/links';

Meteor.startup(() => {
  Meteor.publish('links', function() {
    return Links.find({});
  });
});

// figure out if token exist in db, and redirrect user
const onRoute = (req, res, next) => {
  // search db for existing token, and pass to const 'link'
  const link = Links.findOne({ token: req.params.token });
  Links.update(link, { $inc: { clicks: 1 } });

  if (link) {
    // update record on redirect
    // if we found existing token in db
    res.writeHead(307, { Location: link.url });
    res.end();
  } else {
    // if token does not exist in db, return to homepage (do nothing)
    next();
  }
};

const middleware = ConnectRoute((router) => {
  router.get('/:token', onRoute);
});

// Meteor middleware
WebApp.connectHandlers.use(middleware);
