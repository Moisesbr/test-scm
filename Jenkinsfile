pipeline {
        agent any
        stages {
                def customImage
                stage('Clone repository') {
                    checkout scm
                }

                stage('Build image') {
                    customImage = docker.build("my-image:${env.BUILD_ID}")
                }

                stage('Unit test') {
                        steps {
                            customImage.inside {
                                sh 'make test'
                            }
                        }
                }
                /*stage('Unit test') {
                        steps {
                            sh 'npm run test' // to ensure it is installed
                        }
                }*/

                stage('Staging') {
                        when {
                           branch "hml"
                        }
                        steps {
                                sh 'echo "deploy to staging"'
                        }
                }

                stage('Production') {
                        when {
                           branch "master"
                        }
                        steps {
                                sh 'echo "deploy to production"'
                        }
                }
         }

}
