/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': '/windup-web/node_modules/',
            'models:': '/windup-web/tests/unmarshaller/tsModels/',
            'tests/app/*': "app/*"
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            // angular testing umd bundles
            '@angular/core/testing': 'npm:@angular/core/bundles/core-testing.umd.js',
            '@angular/common/testing': 'npm:@angular/common/bundles/common-testing.umd.js',
            '@angular/compiler/testing': 'npm:@angular/compiler/bundles/compiler-testing.umd.js',
            '@angular/platform-browser/testing': 'npm:@angular/platform-browser/bundles/platform-browser-testing.umd.js',
            '@angular/platform-browser-dynamic/testing': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',
            '@angular/http/testing': 'npm:@angular/http/bundles/http-testing.umd.js',
            '@angular/router/testing': 'npm:@angular/router/bundles/router-testing.umd.js',
            '@angular/forms/testing': 'npm:@angular/forms/bundles/forms-testing.umd.js',
            // other libraries
            'rxjs':                       'npm:rxjs',
            'jquery':                     'npm:jquery/dist/jquery.min.js',
            'd3':                         'npm:d3/dist/d3.min.js',
            'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
            'ng2-file-upload': 'npm:ng2-file-upload',
            'angular2-tree-component': 'npm:angular2-tree-component',
            'lodash': 'npm:lodash',
            'jstree': 'npm:jstree/dist/jstree.js',
            'bootstrap': 'npm:bootstrap/dist/js/bootstrap.js'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: { main: './main.js', defaultExtension: 'js' },
            '../../app':                  { main: 'main.js',  defaultExtension: 'js' },
            '../app':                     { main: 'main.js',  defaultExtension: 'js' },
            rxjs:                         { defaultExtension: 'js' },
            'ng2-file-upload': { defaultExtension: 'js' },
            'angular2-tree-component'   : { main: 'dist/angular2-tree-component.js', defaultExtension: 'js' },
            'lodash'                    : { main: 'lodash.js', defaultExtension: 'js' },
            'jquery':                     { main: 'dist/jquery.js', defaultExtension: 'js' },
            './':                         { defaultExtension: 'js' },
        }
    });
})(this);
