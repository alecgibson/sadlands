module.exports = function (grunt) {
    grunt.initConfig({
        staticHandlebars: {
            options: {
                // Task-specific options go here.
            },
            files: {
                'compiled/**/*.html':'source/**/*.hbt'
            }
        }
    });

    grunt.loadNpmTasks('grunt-static-handlebars');

    grunt.registerTask('default', ['staticHandlebars']);
};