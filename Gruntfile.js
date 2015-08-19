/**
 * CONFIGURAÇÃO DO PLUGIN GRUNT
 * usa o matchdep para automaticamente importar todos os plugins do grunt em seu ambiente
 * precisa configurar o comando:
 *      npm install matchdep --save-dev
 * alternativa seria declarar cada plugin manualmente
 * exemplo:
 *      grunt.loadNpmTask('grunt-contrib-conect');
 */


module.exports = function(grunt){
    //instala plugins do grunt automaticamente
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        wiredep: {

            target: {
                src: 'index.html'
            }

        },


        watch: {

            options: {
                livereload: true
            },

            arquivosweb: {
                files:[ 'app/**/*.js', '**/*.html', 'app/**/*.css']
            },

            fazer_wiredep: {
                files: ['bower.json'],
                tasks: ['wiredep']
            }
        },

        copy: {
            arquivos :{
                files: [ {
                    expand:true,
                    src: ['*.html','app/**'],
                    dest: 'build/'
                }]
            }
        },

        concat:{
            principal:{
                src: ['app/js/app-config.js', 'app/js/bootstrap-controller.js', 'app/**/*-service.js'],
                dest: 'build/js/principal.js'
            }
        },

        clean: {
            build:{
                src: ['build']
            }
        },

        ngAnnotate:{
            options: {
                singleQuotes: true
            },
            build:{
                files:[
                    {
                        expand: true,
                        src: ['build/**/*.js']
                    }
                ]

            }
        },

        uglify:{
            build:{
                files:[
                    {
                        expand: true,
                        src:['build/**/*.js']
                    }
                ]
            }
        },

        cssmin:{
            build:{
                files:[
                    {
                        expand: true,
                        src:['build/**/*.css']
                    }
                ]
            }
        },

        htmlmin:{
            build:{
                options:{
                    removeComments: true,
                    collapseWhitespace: true
                },
                files:[
                    {
                        expand: true,
                        src:['build/**/*.html']
                    }
                ]
            }
        }

    });

    grunt.registerTask('build', ['clean', 'copy', 'concat', 'ngAnnotate','uglify','cssmin','htmlmin']);
    grunt.registerTask('desenvolvimento', ['watch']);
};