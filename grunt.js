﻿"use strict";

var buildIndexTask = require("./build/buildIndexTask");

module.exports = function (grunt) {
    buildIndexTask(grunt);

    grunt.initConfig({
        lint: {
            all: ["lib/**/*.js"]
        },
        buildIndex: {
            dest: "out/index.html",
            browserify: {
                entry: "lib/start",
                dest: "out/browserified",
                aliases: {
                    "knockout": "knockoutify",
                    "jquery": "jquery-browserify"
                }
            },
            stylus: {
                src: ["**/*.styl"],
                dest: "out/css"
            }
        }
    });

    grunt.registerTask("default", "buildIndex");
};
