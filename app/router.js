import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});


Router.map(function() {
  this.route('about',{path:'/about'});
  this.route('contact');
  this.route('galleries', function() {
    this.route('show', { path: '/:photo_id' });
  });

  this.route('to-do-list', function() {
    this.route('edit',{path:'/edit/:task_id'});
  });
});

export default Router;
