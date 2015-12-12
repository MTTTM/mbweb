'use strict';

module.exports = function(grunt) {
    //加载grunt插件
    require('load-grunt-tasks')(grunt);

    //在cmd显示任务执行时间
    require('time-grunt')(grunt);

    //配置工程路径
    var appConfig = {
        app: 'dev',
        dist: 'dist',
        version: '0.0.0',
        html: 'html'
    };

    grunt.initConfig({

        cfec: appConfig,
        pkg: grunt.file.readJSON('package.json'),
        less: {
            less: {
                files: [{
                    expand: true,
                    cwd: 'less/',
                    src: '*.less',
                    dest: 'css/',
                    ext: '.css'
                }]
            }
        },

        //
        watch: {
            less: {
                files: ['less/*.less' ],
                tasks: 'less:less'
            }
        }



    });
};