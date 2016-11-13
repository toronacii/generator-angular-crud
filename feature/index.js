'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
var inflections = require('underscore.inflections');

module.exports = yeoman
    .generators
    .Base
    .extend({

        constructor: function () {

            yeoman
                .generators
                .Base
                .apply(this, arguments);

            this.argument('featureName', {
                type: String,
                required: true
            });


            var split = this.featureName.split('.').map(path => _.kebabCase(path));

            if (split['0'] !== 'app') {
                split.unshift('app');
            }

            this.moduleName = split.join(".");           
            this.parentRoute = this.moduleName.split('.').slice(0, split.length - 1).join('.');
            this.path = this.moduleName.replace(/\./g, "/");

            this.featureName = _.capitalize(split[split.length - 1]);
            this.featureSingularName = inflections.singularize(this.featureName);
            this.featurePluralName = inflections.pluralize(this.featureName);

            this.dotFeatureSingularName = _
                .kebabCase(this.featureSingularName)
                .replace(/-/g, '.');
            this.dotfeaturePluralName = _
                .kebabCase(this.featurePluralName)
                .replace(/-/g, '.');

            this.slugifiedName = _.kebabCase(this.featureName);

            this.camelizedSingularName = _.camelCase(this.featureSingularName);
            this.camelizedPluralName = _.camelCase(this.featurePluralName);
            this.slugifiedSingularName = _.kebabCase(this.camelizedSingularName);

            this.upperCamelizeSingularName = this.camelizedSingularName[0].toUpperCase() + this.camelizedSingularName.slice(1);
            this.upperCamelizePluralName = this.camelizedPluralName[0].toUpperCase() + this.camelizedPluralName.slice(1);

        },

        prompting: function () {

            this.log(yosay('Adding a new feature!'));

        },

        featureFiles: function () {

            // Define file names
            var moduleFile = 'src/' + this.path + '/' + this.slugifiedName + '.module.js';
            var configFile = 'src/' + this.path + '/' + this.slugifiedName + '.routes.js';
            
            var controllerFile = 'src/' + this.path + '/controllers/' + this.slugifiedName + '.controller.js';
            
            var createControllerFile = 'src/' + this.path + '/controllers/create-' + this.slugifiedSingularName + '.controller.js';
            var editControllerFile = 'src/' + this.path + '/controllers/edit-' + this.slugifiedSingularName + '.controller.js';
            var listControllerFile = 'src/' + this.path + '/controllers/list-' + this.slugifiedName + '.controller.js';
            var viewControllerFile = 'src/' + this.path + '/controllers/view-' + this.slugifiedSingularName + '.controller.js';
            var createModalControllerFile = 'src/' + this.path + '/controllers/create-' + this.slugifiedSingularName + '-modal.controller.js';

            var serviceFile = 'src/' + this.path + '/services/' + this.slugifiedName + '.service.js';
            var serviceFormFile = 'src/' + this.path + '/services/' + this.slugifiedName + '.form.service.js';
            var serviceModalsFile = 'src/' + this.path + '/services/modals-' + this.slugifiedSingularName + '.service.js'

            var stylesFile = 'src/' + this.path + '/' + this.slugifiedName + '.less';

            // Render angular module files
            this.template('_module.js', moduleFile);
            this.template('_routes.js', configFile);
            this.template('controllers/_controller.js', controllerFile);
            this.template('controllers/_create.controller.js', createControllerFile);
            this.template('controllers/_edit.controller.js', editControllerFile);
            this.template('controllers/_list.controller.js', listControllerFile);
            this.template('controllers/_view.controller.js', viewControllerFile);
            this.template('controllers/_create-modal.controller.js', createModalControllerFile);

            this.template('services/_service.js', serviceFile);
            this.template('services/_form.service.js', serviceFormFile);
            this.template('services/_modals.service.js', serviceModalsFile);

            //Render styles
            this.template('_styles.less', stylesFile);

            // Render angular module views
            this.template('views/_create.html', 'src/' + this.path + '/views/create-' + this.slugifiedSingularName + '.html');
            this.template('views/_edit.html', 'src/' + this.path + '/views/edit-' + this.slugifiedSingularName + '.html');
            this.template('views/_list.html', 'src/' + this.path + '/views/list-' + this.slugifiedName + '.html');
            this.template('views/_view.html', 'src/' + this.path + '/views/view-' + this.slugifiedSingularName + '.html');
            this.template('views/_create-modal.html', 'src/' + this.path + '/views/create-' + this.slugifiedSingularName + '-modal.html');
            

        }

    });
